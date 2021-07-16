const express = require("express");
const router = express.Router();
const Moment = require("moment");
const videoList = require("../data/videos.json")


router.get('/videos', (_req, res) => {
    res.status(200).json(videoList);
})

router.get('/nextvideo', (_req, res) => {
    const sortedVideos = videoList.sort((a, b)=> new Date(a.showing) - new Date(b.showing))
    // const endTime = currentVideo.map(video=>(Moment.duration(video.duration, "minutes")))
    // const newEndTime = currentVideo.map(video=>(Moment(video.showing).add(endTime, "minutes").toDate()))
    const upcomingVideos = sortedVideos.filter((video)=> {
        endTime=Moment.duration(video.duration, "minutes")
        newEndTime= Moment(video.showing).add(endTime, "minutes").toDate()
        return Moment().isBefore(newEndTime)
    })
    // res.status(200).json(newVideos);
    res.status(200).json(upcomingVideos);
})


router.get('/videos/:videoId', (req, res) => {
    let { videoId } = req.params;
    const videoInfo = videoList.find(video => video.id === videoId)
    if(!videoInfo) {
    res.status(400).send(`There is no video with id of ${videoId}`)
    }
    res.status(200).json(videoInfo)
    
})

module.exports = router;