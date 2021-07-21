const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    channel: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    duration: {
        type: String
    },
    genre: {
        type: String
    },
    video: {
        type: String
    },
    showing: {
        type:  String
    },
    time: {
        type: String
    },
    language: {
        type: String
    },
    year: {
        type: Number
    }

});

const Video = mongoose.model("Video", VideoSchema)
module.exports = Video