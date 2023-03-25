const express = require("express")
const mongoose  = require('mongoose')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')      //One of many engines which are used to parse and make sense of ejs
const port = 5000
require('dotenv').config()

app.set('view engine', 'ejs')
app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, '/public')))


// configuring the mongoDB
const mongodbUrl = process.env.MONGODB_URL
mongoose.connect(mongodbUrl).then(()=>{
    console.log("MongoDB connected successfully...")
}).catch((e)=>{
    console.log(`Error in connecting to MongoDB ${e}`)
})



app.get('/', (req, res)=>{
    res.send("Hello fucker!!")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}...`)
})