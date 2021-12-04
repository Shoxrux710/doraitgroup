const { Schema, model } = require('mongoose');


const portSchema = new Schema({

    title: {
        uz: String,
        ru: String,
        en: String,
    },
    description: {
        uz: String,
        ru: String,
        en: String,
    },
    link: {
        type: String,
        required: true
    },
    imagePort: {
        fileName: String,
        fileUrl: String
    }
})

module.exports = model('Portfolio', portSchema)