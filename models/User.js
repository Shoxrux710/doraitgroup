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
    }
})

module.exports = model('User', userSchema)