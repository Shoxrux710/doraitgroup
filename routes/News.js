const {Router} = require('express')
const News = require('../models/News')
const isAuthMiddleware = require('../middleware/isAuth');
const attachUserMiddleware = require('../middleware/attachUser');
const checkRoleMiddleware = require('../middleware/checkRole');
const {newsValidator} = require('../utils/validator')
const {validationResult} = require('express-validator')
const path = require('path')
const fs = require('fs')    
const router = Router()


const deleteOldImage = (fileName) => {

    return new Promise((resolve, reject) => {
        fs.unlink(path.join(__dirname, `../images/news/${fileName}`), (err) => {
            resolve()
        })
    })
}

// post
router.post('/all', isAuthMiddleware, attachUserMiddleware, checkRoleMiddleware('admin'), newsValidator, (req, res) => {
    
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
        descriptionEn
    } = req.body


    const {filename} = req.files.imageNews[0]

    const newOld = new News({
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
        imageNews: {
            fileName: filename,
            fileUrl: `./news/${filename}`
        }

    })

    newOld.save(err => {
        if (err) return res.status(400).json({errorMessage: "Xato"})
        res.status(200).json({successMessage: "Ok"})
    })
})

// get

router.get('/all', async (req, res) => {

    try {
        
        const skip = req.query.skip ? Number(req.query.skip) : 0
        const limit = req.query.limit ? Number(req.query.limit) : 0

        const newsCount = await News.find().countDocuments() 
        const news = await News.find().skip(skip).limit(limit)
        const newSort = await News.find().sort({_id: -1}).skip(0).limit(2)


        res.status(200).json({
            newsCount,
            newSort,
            news
        })

    } catch (err) {
        res.status(400).json({errorMessage: "Xato"})
    }
})


// get/:id

router.get('/all/:id', (req, res) => {

    const {id} = req.params

    News.findById(id, (err, newsOne) => {
        if (err) return res.status(400).json({errorMessage: "Xato"})
        res.status(200).json({newsOne})
    })
})

// random

router.get('/random', async (req, res) => {
    
    try {
        const usedIndexes = [];
        const getUniqueRandomNumber = (x) => {
            const index = Math.floor(Math.random() * (x));
            if (usedIndexes.includes(index)) {
                return getUniqueRandomNumber(x);
            } else {
                usedIndexes.push(index);
                return index;
            }
        }

        const news = [];
        const newsCount = await News.countDocuments();
        let randomLengthNews = newsCount < 4 ? newsCount : 4;

        for (let i = 0; i < randomLengthNews; i++) {
            const randomValue = getUniqueRandomNumber(newsCount);

            const randomNews = await News.findOne().skip(randomValue)
            news.push(randomNews);
        }
        

        console.log(news);
        res.status(200).json({ news });
    } catch (err) {
        console.log(err);
        res.status(400).json({errorMessage: "Xato"})
    }
})

// delete

router.delete('/delete/:id', isAuthMiddleware, attachUserMiddleware, checkRoleMiddleware('admin'), (req, res) => {

    const {id} = req.params

    News.findById(id, (err, oneNews) => {
        if (err) return res.status(400).json({errorMessage: "Xato"})

        const {imageNews} = oneNews
        const oldFileName = imageNews.fileName  

        News.deleteOne({_id: id}, async (err) => {
            if (err) return res.status(400).json({errorMessage: `Xatto, o'chirilmadi`})
            await deleteOldImage(oldFileName)
            res.status(200).json({successMessage: "Delete"})
        })
    })
})

// view

router.put('/view/:id', (req, res) => {

    const {id} = req.params

    News.findById(id, (err, oneNews) => {
        if (err) return res.status(404).json({errorMessage: "Xato"})

        const view = oneNews.view + 1

        oneNews.view = view

        oneNews.save(err => {
            if (err) return res.status(404).json({errorMessage: "Xato"})
            res.status(200).json({successMessage: `Ko'rildi`, view})
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
        descriptionEn
    } = req.body


    News.findById(id, (err, oneNews) => {
        if (err) return res.status(400).json({errorMessage: "Xato"})

        const {imageNews} = oneNews
        const oldFileName = imageNews.fileName

        const filename = req.files.imageNews ? req.files.imageNews[0].filename : oldFileName
        

        oneNews.title = {
            uz: titleUz,
            ru: titleRu,
            en: titleEn,
        }

        oneNews.description = {
            uz: descriptionUz,
            ru: descriptionRu,
            en: descriptionEn,
        }

        oneNews.imageNews = {
            fileName: filename,
            fileUrl: `./news/${filename}`
        }

        oneNews.save(async (err) => {
            if (err) return res.status(400).json({errorMessage: "Xato"})
            req.files.imageNews ? await deleteOldImage(oldFileName) : null
            res.status(200).json({successMessage: "Yangilandi"})
        })
    })
})



module.exports = router