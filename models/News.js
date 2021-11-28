const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({

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
    view: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    imageNews: {
        fileName: String,
        fileUrl: String
    }
})

module.exports = mongoose.model('New', newsSchema)