const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    showing: {
        type:  String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    }

});

const Video = mongoose.model("Video", VideoSchema)
module.exports = Video