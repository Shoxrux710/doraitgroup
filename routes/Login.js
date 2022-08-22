const {Router} = require('express')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const config = require('config')
const sendgrid = require('nodemailer-sendgrid-transport')
const {validationResult} = require('express-validator')
const {authValidator} = require('../utils/validator')
const {registerValidator} = require('../utils/validator')
const isAuthMiddleware = require('../middleware/isAuth')
const attachUserMiddleware = require('../middleware/attachUser')
const Login = require('../models/Login')
const Token = require('../models/Token');
const jwt = require('jsonwebtoken')
const router = Router()

// register

router.post('/register', registerValidator, async (req, res) => {
    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()){

            return res.status(400).json({errors: errors.array(), errorMessage: `Iltimos to'ldiring`})
        }

        const {name, login, email, password} = req.body

        const user = await Login.findOne({login})

        if (user){
            return res.status(400).json({errorMessage: "User already"})
        }

        const passwordHashed = await bcrypt.hash(password, 12)

        const promise = new Login({
            name,
            login,
            email,
            password: passwordHashed
        })

        promise.save(async (err) => {
            if (err) return res.status(400).json({errorMessage: "Xato"})
            res.status(200).json({successMessage: "Register success"})
        })

        
    } catch (err) {
        console.log(err)
    }
})

// get/:id

router.get('/data', isAuthMiddleware, attachUserMiddleware, (req, res) => {
    res.status(200).json({ login: req.user.login });
});

// login 

router.post('/login', authValidator, async (req, res) => {
    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array(), errorMessage: `Iltimos to'ldiring`})
        }

        const {login, password} = req.body

        const user = await Login.findOne({login})

        if (!user){
            return res.status(400).json({errorMessage: "Please login..."})
        }

        const match = await bcrypt.compare(password, user.password)

        if (!match){
            return res.status(400).json({errorMessage: "inCorrect password"})
        }

        const payload = {
            id: user._id
        }

        const token = jwt.sign(payload, config.get('jwtSecretKeyAdmin'), { expiresIn: '1h' });
        const refreshToken = jwt.sign(payload, config.get('refreshToken'));  // 1

        const newRefreshToken = new Token({ refreshToken });

        await newRefreshToken.save();

        res.status(200).json({
            token,
            rToken: refreshToken,
            user: { role: user.role },
            msg:  "User Loggedin Succesfully"
        })
        
    } catch (err) {
        console.log(err);
    }
});

router.delete('/logout', (req, res) => {
    const { refreshToken } = req.query;

    Token.deleteOne({ refreshToken }, (err) => {
        if (err) return res.status(500).json({ errorMessage: 'Ochirolmadi, qaytatan urinibkoring' })
        res.status(200).json({ successMessage: 'Systemadan chiqdingiz' });
    })
});

router.post('/token', (req, res) => {
    const { refreshToken } = req.body;
 
    if (!refreshToken) return res.status(401).json({ errorMessage: 'Siz avtorizatsiyadan otmagansiz' })

    jwt.verify(refreshToken, config.get('refreshToken'), (rErr, user) => {
        if (rErr) return res.status(403).json({ errorMessage: 'Sizni dostupingiz yoq' });

        Token.findOne({ refreshToken }, (err, rToken) => {
            if (err) return res.status(500).json({ errorMessage: 'Nmadur xatto ketti' });

            if (!rToken) return res.status(403).json({ errorMessage: 'Sizni dostupingiz yoq' });

            const accessToken = jwt.sign({ id: user.id }, config.get('jwtSecretKeyAdmin'), { expiresIn: '1h' });
            res.status(200).json({ accessToken });
        });
    });    
});


module.exports = router