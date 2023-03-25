// const Image = require("../models/Image")

// async function fetchImages(){
//     const images = await Image.find()
//     console.log({images})
//     return images
// }

// module.exports = {fetchImages}

const MyModel = require('../models/Image'); // replace with your model name

async function fetchImages() {
    console.log("function entered")
    const objects = await MyModel.find({});
    console.log({objects})
    return objects;
}

module.exports = fetchImages

