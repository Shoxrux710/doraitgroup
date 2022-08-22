const {Router} = require('express')
const Portfolio = require('../models/Portfolio')
const isAuthMiddleware = require('../middleware/isAuth');
const attachUserMiddleware = require('../middleware/attachUser');
const checkRoleMiddleware = require('../middleware/checkRole');
const {validationResult} = require('express-validator')
const {portValidator} = require('../utils/validator')
const path = require('path')
const fs = require('fs');
const router = Router()


const deleteOldImage = (fileName) => {
    
    return new Promise((resolve, reject) => {
        fs.unlink(path.join(__dirname, `../images/portfolio/${fileName}`), (err) => {
            resolve()
        })
    })
}

// post

router.post('/all', isAuthMiddleware, attachUserMiddleware, checkRoleMiddleware('admin'),  portValidator, (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array(), errorMessage: `Iltimos to'ldiring`})
    }

    const {
        titleUz,
        titleRu,
        titleEn,
        descriptionUz,
        descriptionRu,
        descriptionEn,
        link
    } = req.body

    const {filename} = req.files.imagePort[0]

    const portOld = new Portfolio({
        
        title: {
            uz: titleUz,
            ru: titleRu,
            en: titleEn,
        },
        description: {
            uz: descriptionUz,
            ru: descriptionRu,
            en: descriptionEn,
        },
        link,
        imagePort: {
            fileName: filename,
            fileUrl: `./portfolio/${filename}`
        }
    })

    portOld.save(err => {
        if (err) return res.status(400).json({errorMessage: "Xato"})
        res.status(200).json({successMessage: "Ok"})
    })


})

// get

router.get('/all', async (req, res) => {

    try {
        const user = await Portfolio.find()
        const userCount = await Portfolio.find().countDocuments()
        const portSort = await Portfolio.find().sort({_id: -1}).skip(0).limit(1)

        res.status(200).json({
            userCount,
            portSort,
            user
        })
    } catch (err) {
        console.log(err);
    }
      
})


// get/:id

router.get('/all/:id', (req, res) => {

    const {id} = req.params

    Portfolio.findById(id, (err, onePort) => {
        if (err) return res.status(400).json({errorMessage: "Xato"})
        res.status(200).json({onePort})
    })
})


// delete

router.delete('/delete/:id', isAuthMiddleware, attachUserMiddleware, checkRoleMiddleware('admin'), (req, res) => {
    
    const {id} = req.params

    Portfolio.findById(id, (err, onePort) => {
        if (err) return res.status(400).json({errorMessage: "Xato"})

        const {imagePort} = onePort
        const oldFileName = imagePort.fileName

        Portfolio.deleteOne({_id: id}, async (err) => {
            if (err) return res.status(400).json({errorMessage: "Xato"})
            await deleteOldImage(oldFileName)
            res.status(200).json({successMessage: "Delete"})
        })
    })
})

// update 

router.put('/update/:id', isAuthMiddleware, attachUserMiddleware, checkRoleMiddleware('admin'), (req, res) => {

    const {id} = req.params

    const {
        titleUz,
        titleRu,
        titleEn,
        descriptionUz,
        descriptionRu,
        descriptionEn,
        link
    } = req.body

    Portfolio.findById(id, (err, onePort) => {
        if (err) return res.status(400).json({errorMessage: "Xato"})

        const {imagePort} = onePort
        const oldFileName = imagePort.fileName

        const filename = req.files.imagePort ? req.files.imagePort[0].filename : oldFileName

        onePort.title = {
            uz: titleUz,
            ru: titleRu,
            en: titleEn,
        }
        onePort.description = {
            uz: descriptionUz,
            ru: descriptionRu,
            en: descriptionEn,
        }
        onePort.imagePort = {
            fileName: filename,
            fileUrl: `./portfolio/${filename}`
        }
        onePort.link = link

        onePort.save(async (err) => {
            if (err) return res.status(400).json({errorMessage: "Xato"})
            req.files.imagePort ? await deleteOldImage(oldFileName) : null
            res.status(200).json({successMessage: "Yangilandi"})
        })

    })
})

module.exports = router