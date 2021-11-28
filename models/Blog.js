const {Schema, model} = require('mongoose')

const blogSchema = new Schema({
    title: String,
    description: String,
    view: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    imageBlog: {
        fileName: String,
        fileUrl: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Blog', blogSchema)