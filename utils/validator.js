const {body} = require('express-validator')

exports.newsValidator = [
    body('titleUz').isLength({min: 1}),
    body('titleRu').isLength({min: 1}),
    body('titleEn').isLength({min: 1}),
    body('descriptionUz').isLength({min: 1}),
    body('descriptionRu').isLength({min: 1}),
    body('descriptionEn').isLength({min: 1})
]

exports.portValidator = [
    body('titleUz').isLength({min: 1}),
    body('titleRu').isLength({min: 1}),
    body('titleEn').isLength({min: 1}),
    body('descriptionUz').isLength({min: 1}),
    body('descriptionRu').isLength({min: 1}),
    body('descriptionEn').isLength({min: 1}),
    body('link').isLength({min: 1})
]

exports.authValidator = [
    body('login').isLength({min: 1}),
    body('password').isLength({min: 1})
]

exports.registerValidator = [
    body('name').isLength({min: 1}),
    body('login').isLength({min: 1}),
    body('email').isLength({min: 1}),
    body('password').isLength({min: 1}),
    body('confirm').custom((value, {req}) => {
         if(value !== req.body.password){
              throw new Error(`Parollar bir xil bo'lishi kerak!`)
         }

         return true
    })
]