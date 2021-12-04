const { Router } = require('express')
const { validationResult } = require('express-validator')
const { registerValidator } = require('../utils/validator')
const { authValidator } = require('../utils/validator')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const blogAuthMiddleware = require('../middleware/blogAuth');
const blogUserMiddleware = require('../middleware/blogUser');
const Blog = require('../models/Blog')
const path = require('path')
const fs = require('fs')
const router = Router()


const deleteOldImage = (fileName) => {

    return new Promise((resolve, reject) => {
        fs.unlink(path.join(__dirname, `../client/public/user/${fileName}`),(err) => {
            resolve()
        })
    }) 
}

const deleteUserImage = (fileName) => {
    
    return new Promise((resolve, reject) => {
        fs.unlink(path.join(__dirname, `../client/public/blog/${fileName}`), (err) => {
            resolve()
        })
    })
}


// register

router.post('/register', registerValidator, async (req, res) => {

    try {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {

            return res.status(400).json({ errors: errors.array(), errorMessage: `Iltimos to'ldiring` })
        }

        const { login, name, email, password } = req.body

        const user = await User.findOne({ login })

        if (user) {
            return res.status(400).json({ errorMessage: "User already" })
        }

        const passwordHashed = await bcrypt.hash(password, 12)

        const promise = new User({
            name,
            login,
            email,
            password: passwordHashed
        })


         promise.save(async (err) => {
            if (err) return res.status(400).json({ errorMessage: "Xato" })

            const user = await User.findOne({login})

            const payload = {
             id: user._id
            }

            const token = jwt.sign(payload, "UBGJVNSKVWUENVKSJNV")

            res.status(200).json({ 
                token,
                successMessage: "Register success"
                })
        })

    } catch (err) {
        console.log(err);
    }
})

// data

router.get('/data', blogAuthMiddleware, blogUserMiddleware, (req, res) => {

    Blog.find({ userId: req.user._id }, (err, blogs) => {
        if (err) return res.status(400).json({ errorMessage: "Xato" })

        res.status(200).json({ name: req.user.name, blogs })
    })
})

// login

router.post('/login', authValidator, async (req, res) => {

    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {

            return res.status(400).json({ errors: errors.array(), errorMessage: `Iltimos to'ldiring` })
        }

        const { login, password } = req.body

        const user = await User.findOne({ login })

        if (!user) {
            return res.status(400).json({ errorMessage: "Please login..." })
        }

        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return res.status(400).json({ errorMessage: "inCorrect password" })
        }

        const payload = {
            id: user._id
        }

        const token = jwt.sign(payload, "UBGJVNSKVWUENVKSJNV")

        res.status(200).json({
            token,
            id: user._id,
            msg: "User Loggedin Succesfully"
        })

    } catch (err) {
        console.log(err);
    }
})

// get

router.get('/all', async (req, res) => {

    try {

        const skip = req.query.skip ? Number(req.query.skip) : 0
        const limit = req.query.limit ? Number(req.query.limit) : 0

        const user = await User.find().skip(skip).limit(limit)

        const users = []

        for (let i = 0; i < user.length; i++) {
            const userId = user[i]._id;
            const blogs = await Blog.find({ userId }).countDocuments();

            users.push({
                users: user[i],
                blogsLangth: blogs
            })
        }

        const userCount = await User.countDocuments()

        const userSort = await User.find().sort({ _id: -1 }).skip(0).limit(3)

        res.status(200).json({
            userCount,
            userSort,
            users
        })


    } catch (err) {
        console.log(err);
    }
})

// get:id

router.get('/all/put', blogAuthMiddleware, blogUserMiddleware, (req, res) => {
    
    res.status(200).json({ user: req.user })
   
})


// delete

router.delete('/delete/:id', async (req, res) => {

    const { id } = req.params

    try {
        await User.deleteOne({_id: id})
        const blogs = await Blog.find({userId: id})

        for (let i = 0; i < blogs.length; i++) {

            const {imageBlog} = blogs[i]
            const oldFileName = imageBlog.fileName
            await deleteUserImage(oldFileName)
        }

        await Blog.deleteMany({userId: id})
        res.status(200).json({successMessage: "Delete"})

    } catch (err) {
        res.status(400).json({ errorMessage: "Xato" })
    }
            

})

// update

router.put('/update', blogAuthMiddleware, (req, res) => {

    // const {id} = req.params

    const {
        telegram,
        facebook,
        instagram,
        login
    } = req.body

    User.findById(req.decodedUser.id, (err, users) => {
        const {imagesUser} = users

        const oldFileName = imagesUser.fileName

        const filename = req.files.imagesUser ? req.files.imagesUser[0].filename : oldFileName

        users.telegram = telegram
        users.facebook = facebook
        users.instagram = instagram
        users.login = login
        users.imagesUser = {
            fileName: filename,
            fileUrl: `./user/${filename}`
        }

        users.save(async (err) => {
            if (err) return res.status(400).json({errorMessage: "Xato"})
            req.files.imagesUser ? deleteOldImage(oldFileName) : null
            res.status(200).json({successMessage: "Yangilandi"})
        })

    })



})

module.exports = router