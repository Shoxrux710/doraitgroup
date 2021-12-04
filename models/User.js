const {Schema, model} = require('mongoose')


const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    imagesUser: {
        fileName: {
            type: String,
            default: null
        },
        fileUrl: {
            type: String,
            default: null
        }
    },
    telegram: {
        type: String,
        default: null
    },
    instagram: {
        type: String,
        default: null
    },
    facebook: {
        type: String,
        default: null
    }
})

module.exports = model('User', userSchema)