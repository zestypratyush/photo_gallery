const multer = require('multer')
const { storage, cloudinary } = require('../cloudinary/index')
const DataUriParser = require('datauri/parser.js')
const path = require('path')
const ImageSchema = require('../models/Image')
const getDataUri = (file)=> {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    console.log(extName);
    return parser.format(extName, file.buffer);
}

async function addImage (req, res, next){
    // upload the image to clodinary and get the url
    // console.log(req.file)
    const file = req.file;
    const fileUri = getDataUri(file)

    const mycloud = await cloudinary.uploader.upload(fileUri.content);

    // alert("Image uploaded successfully");
    await ImageSchema.create({
        image_name: file.originalname,
        image_url: mycloud.secure_url,
        date_of_upload: Date.now()
    })
    res.redirect("/");
}

// function uploadImage()

module.exports = {addImage}