const express = require("express")
const mongoose  = require('mongoose')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')      //One of many engines which are used to parse and make sense of ejs
const port = 5001
const Image = require("./models/Image")
require('dotenv').config()

const {addImage} = require('./controllers/addImage')
const { singleUpload } = require("./middlewares/multer")

app.set('view engine', 'ejs')
app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, '/public')))


// MongoDB Configuration
const mongodbUrl = process.env.MONGODB_URL
mongoose.connect(mongodbUrl).then(()=>{
    console.log("MongoDB connected successfully...")
}).catch((e)=>{
    console.log(`Error in connecting to MongoDB ${e}`)
})


// Route Configuration
app.get('/new', (req, res)=> {
    res.render('addImageForm')
})
app.post('/new',singleUpload, addImage);

// app.post('/upload', upload.single('image'), uploadImage)

app.get('/', async (req, res)=>{
    const data = await Image.find({})
    // console.log({data})
    res.render("home", {data: data})
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}...`)
})