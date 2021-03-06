const {Router} = require('express')
const blogAuthMiddleware = require('../middleware/blogAuth');
const blogUserMiddleware = require('../middleware/blogUser');
const Blog = require('../models/Blog')
const User = require('../models/User')
const path = require('path')
const fs = require('fs') 
const router = Router()


const deleteOldImage = (fileName) => {

    return new Promise((resolve, reject) => {
        fs.unlink(path.join(__dirname, `../client/public/blog/${fileName}`), (err) => {
            resolve()
        })
    })
}

// post

router.post('/all', blogAuthMiddleware, blogUserMiddleware, async (req, res) => {
    try {
        const {title, description} = req.body;
        const user = await User.findById(req.user._id);
        
        const {filename} = req.files.imageBlog[0]

        const blogOld = new Blog({
            title,
            description,
            imageBlog: {
                fileName: filename,
                fileUrl: `./blog/${filename}`
            },
            userId: user
        })
        
        await blogOld.save();
        res.status(200).json({ successMessage: 'Ok'});
    } catch (e) {
        res.status(400).json({ errorMessage: 'Nmadur xato ketti' })
    }
})


// get

router.get('/all', async (req, res) => {

    try {
        
        const skip = req.query.skip ? Number(req.query.skip) : 0
        const limit = req.query.limit ? Number(req.query.limit) : 0

        const blogCount = await Blog.countDocuments()
        const blogs = await Blog.find().skip(skip).limit(limit).populate('userId', 'name telegram instagram facebook')
        const blogSort = await Blog.find().sort({_id: -1}).skip(0).limit(2)

        res.status(200).json({
            blogCount,
            blogSort,
            blogs
        })

    } catch (err) {
        console.log(err)
    }
})

// delete

router.delete('/delete/:id', (req, res) => {
    const {id} = req.params

    Blog.findById(id, (err, blogsOne) => {
        if (err) return res.status(400).json({errorMessage: "Xato"})

        const {imageBlog} = blogsOne
        oldFileName = imageBlog

        Blog.deleteOne({_id: id}, async(err) => {
            if (err) return res.status(400).json({errorMessage: "Xato"})
            await deleteOldImage(oldFileName)
            res.status(200).json({successMessage: 'Delete'})
        })
    })
})

// filter
router.get('/filter/:id', async (req, res) => {
    const {id} = req.params

    console.log(id);

    try {
        
        const blogCounts = await Blog.find({userId: id}).countDocuments()

        const blogAll = await Blog.find({userId: id})
        res.status(200).json({
            blogAll,
            blogCounts
        })

    } catch (err){
        console.log(err);
    }  
})



module.exports = router