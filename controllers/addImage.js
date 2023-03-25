const multer = require('multer')
const { storage, cloudinary } = require('../cloudinary')
const upload = multer({ storage })


async function addImage (req, res, next){
    // upload the image to clodinary and get the url

    // save the record in mongoDB
    res.send("File saved successfully")
}

module.exports = {addImage}