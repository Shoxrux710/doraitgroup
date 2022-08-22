const multer = require('multer')

const storage = multer.diskStorage({

    destination(req, file, cb){
        if (file.fieldname === 'imageNews'){
            cb(null, `./images/news`)
        }
        if (file.fieldname === 'imagePort'){
            cb(null, `./images/portfolio`)
        }
        if (file.fieldname === 'imageBlog'){
            cb(null, `./images/blog`)
        }
        if (file.fieldname === 'imagesUser'){
            cb(null, `./images/user`)
        }
    },

    filename(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg']

const fileFilter = (req, file, cb) => {

    if (allowedTypes.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(null, false)
    }

}

module.exports = multer({storage, fileFilter})