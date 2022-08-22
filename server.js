const express = require('express')
const cors = require('cors')
const middleware = require('./middleware/file')
const path = require('path')
const config = require('config')
const app = express()

// routes

const newsRouter = require('./routes/News')
const adminRouter = require('./routes/Login')
const portRouter = require('./routes/Portfolio')
const userRouter = require('./routes/User')
const blogRouter = require('./routes/Blog')



app.use(express.json({ extended: true }))
app.use(cors())

app.use(middleware.fields([
    {name: 'imageNews', maxCount: 1},
    {name: 'imagePort', maxCount: 1},
    {name: 'imageBlog', maxCount: 1},
    {name: 'imagesUser', maxCount: 1}
]))


// mongoDB
const db = require('./utils/db')
db()

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/api/news/', newsRouter)
app.use('/api/user/', adminRouter)
app.use('/api/port/', portRouter)
app.use('/api/client/', userRouter)
app.use('/api/blog/', blogRouter)



const PORT = config.get('port') || 4008

if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    app.use('/', express.static(path.join(__dirname, 'admin', 'build')))
  
    app.get('/admin*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'admin', 'build', 'index.html'))
    })
  
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  
}  

app.listen(PORT, () => console.log(`server ${PORT} da ishladi`))
