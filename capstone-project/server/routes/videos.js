const express = require("express");
const router = express.Router();
const Moment = require("moment");
const mongoose = require('mongoose');

const VideoModel = require('../models/Video')


//Add a new video
router.post('/add', async (req, res) => {
    const title = req.body.title
    const channel = req.body.channel
    const image = req.body.image
    const description = req.body.description
    const duration = req.body.duration
    const genre = req.body.genre
    const videoLink = req.body.video
    const showing = req.body.showing
    const time = req.body.time
    const language = req.body.language
    const year = req.body.year

    const AddedVideo = new VideoModel ({
    title: title,
    channel: channel,
    image: image,
    description: description,
    duration: duration,
    genre: genre,
    video: videoLink,
    showing: showing,
    time: time,
    language: language,
    year: year
   })
   try{
       await AddedVideo.save();
       res.send("data is added")
   } catch(err){
       console.log(err)
   }
})

//Get all videos
router.get('/videos', (_req, res) => {
    VideoModel.find({}, (err, result)=>{
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})

//Get the next video based on earliest date
router.get('/nextvideo', (_req, res) => {

    VideoModel.find({}, (err, result)=>{
        if (err) {
            console.log(err)
        }
        const sortedVideos = result.sort((a, b)=> new Date(a.showing) - new Date(b.showing))

        const upcomingVideos = sortedVideos.filter((video)=> {
            endTime=Moment.duration(video.duration, "minutes")
            newEndTime= Moment(video.showing).add(endTime, "minutes").toDate()
            return Moment().isBefore(newEndTime)
        })
        res.status(200).json(upcomingVideos)     
        })
    })

//Get a specific video
router.get('/videos/:videoId', (req, res) => {
    let { videoId } = req.params;
    const videoInfo = VideoModel.findOne({_id : videoId }, (err, result)=>{
    if(err) {
    res.status(400).send(`There is no video with id of ${videoId}`)
    }
    res.status(200).json(result)  
    }
    )}
)

//Edit Video
router.put('/videos/:videoId', async (req, res) => {
    const newShowing = req.body.showing
    const { videoId } = req.params;

    try{
        await VideoModel.findById(videoId, (_err, updatedVideo)=>{
            updatedVideo.showing = newShowing;
            updatedVideo.save();
            res.send(updatedVideo)
        })
    } catch(err) {
        console.log(err)
    }
   
})


module.exports = router;