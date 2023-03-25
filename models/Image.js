const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const ImageSchema = new Schema({
    image_name: {
        type: String, 
        required: true, 
    },
    image_url: {
        type: String, 
        required: true, 
    },
    date_of_upload: {
        type: Date, 
        required: true, 
    },
})

module.exports = mongoose.model("Image", ImageSchema)