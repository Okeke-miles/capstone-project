const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Video = new Schema({
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
        type: String
    }

});
module.exports = mongoose.model('Video', Video);