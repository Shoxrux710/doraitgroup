const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    resetToken: {
        type: String,
        default: null
    },
    resetTokenExp: {
        type: Date,
        default: null
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'admin'
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
})

module.exports = mongoose.model('Admin', userSchema)