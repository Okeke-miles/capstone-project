import { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player';
import Moment from "moment";
import axios from "axios";
import CountDown from "../CountDown/CountDown"
import "../VideoPlayer/VideoPlayer.scss"

Moment().format()


function VideoPlayer() {
    
    const [ videoList, setVideoList] = useState(null)
    const [ newVideo, setNewVideo] = useState(null)
    const [ currentIndex, setCurrentIndex] = useState(0)
    const [mute, setMute] = useState(true)

    useEffect(() => {
        axios.get(`/api/nextvideo`)
            .then(res => {
                setVideoList(res.data)
                setNewVideo(res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
   
    console.log(videoList)

    console.log(newVideo)

    if (newVideo === null){
        return ""
    }
    
    if (videoList.length === 0){
        return ""
    }

    const currentTime = Moment();
 
    let newTime = Moment(newVideo.showing)
    console.log(newVideo.showing)
    let timestart = currentTime.diff(newTime, "seconds")

    const url=`${newVideo.video}${timestart}`

    const endTime = Moment.duration(newVideo.duration, "minutes")
    const newEndTime = Moment(newVideo.showing).add(endTime, "minutes").toDate()

    function nextPlay() {
        const newIndex = currentIndex +1;
        setCurrentIndex(newIndex);
        const newVideoList = videoList.filter(video=>(currentTime.isBefore(video.showing)))
        setNewVideo(newVideoList[newIndex])
    }

    const newVideoList=videoList.filter(video=>currentTime.isAfter(newEndTime))

    console.log(newVideoList)
    
    console.log("newEndTime", newEndTime)
    console.log("endTime", endTime)

    function disableMute(e) { 
        e.preventDefault()
        if (mute === true) {
        setMute(false)}
        else{
            setMute(true)
        }
    } 


    return (

        currentTime.isAfter(newVideo.showing) && currentTime.isBefore(newEndTime) ?
   
    <div className="videoplayer__style">
        <ReactPlayer id="videoplayer"
            url={ url }
            playing={ true}
            controls={true}
            autoPlay={true}
            muted={mute}
            onEnded={()=>nextPlay()}
            style={{ pointerEvents: 'none' }}
        />
        <button className={!mute ? "mute-btn__style" : "mute-hidden__style"}  onClick={(e)=>{disableMute(e)}} type="button">Unmute</button>
    </div>
    : <CountDown videoList={newVideo} timestart={newVideo.showing}/> 
    
    )
    
}

export default VideoPlayer