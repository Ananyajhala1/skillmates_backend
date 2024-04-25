const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        requires: true
    },
    imageName : {
        type: String,
        required: true
    },
    imageUrl : {
        type: String,
        required: true
    },
});

const image = mongoose.model('image', imageSchema);
module.exports = image;