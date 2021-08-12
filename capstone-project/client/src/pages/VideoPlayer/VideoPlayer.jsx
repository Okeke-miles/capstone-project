import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player';
import { NavLink } from "react-router-dom"
import Moment from "moment";
import axios from "axios";
import CountDown from "../../components/CountDown/CountDown";
import "../VideoPlayer/VideoPlayer.scss";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

Moment().format()

function VideoPlayer() {
    
    const [ videoList, setVideoList] = useState(null)
    const [ newVideo, setNewVideo] = useState(null)
    const [ currentIndex, setCurrentIndex] = useState(0)

    //To dynamically unmute the video
    const [mute, setMute] = useState(true)

    //To programmitically enter full screen
    const handle = useFullScreenHandle();

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

    if (newVideo === null){
        return ""
    }
    
    if (videoList.length === 0){
        return ""
    }


    //Assign current time to a variable
    const currentTime = Moment();
 
    let newTime = Moment(newVideo.showing).subtract(1, "seconds")

    //To get when a video starts, get the difference between the current time and the time scheduled for the video to start.
    let timestart = currentTime.diff(newTime, "seconds")

    //Dynamically set the url to include the timestart variable. Also calculate when a video ends by first getting the duration in minutes, then adding it to the time when a video has been scheduled.

    const url=`${newVideo.video}${timestart}`

    const endTime = Moment.duration(newVideo.duration, "minutes")
    const newEndTime = Moment(newVideo.showing).add(endTime, "minutes").toDate()

        //This function will be called when a video finishes playing. It filters the finished video and sets a new state for the videolist. The video has already been sorted in the back end.

    function nextPlay() {
        const newIndex = currentIndex +1;
        setCurrentIndex(newIndex);
        const newVideoList = videoList.filter(video=>(currentTime.isBefore(video.showing)))
        setNewVideo(newVideoList[newIndex])
    }

    const newVideoList=videoList.filter(video=>currentTime.isAfter(newEndTime))

        //This function is to disable the mute.
    function disableMute(e) { 
        e.preventDefault()
        if (mute === true) {
        setMute(false)}
        else{
            setMute(true)
        }
    } 



    return (
        //If the current time is after when a video is scheduled to show but before the endtime, the react player will show. Else we see the countdown timer to the next video.
        
        currentTime.isAfter(newVideo.showing) && currentTime.isBefore(newEndTime) ?
   
    <div className="videoplayer__style">
        <FullScreen handle={handle}>
        <ReactPlayer id="videoplayer"
            width= "80vw"
            height="100vh"
            url={ url }
            playing={ true}
            controls={true}
            autoPlay={true}
            muted={mute}
            onEnded={()=>nextPlay()}
            style={{ pointerEvents: 'none' }}
        />
        
        </FullScreen>
        <div className="dynamic-btn__style">
            <button className={!mute ? "mute-btn__style" : "mute-hidden__style"}  onClick={(e)=>{disableMute(e)}} type="button">Unmute</button>
            <button className="fullscreen-btn__style" onClick={handle.enter}>
                Enter fullscreen
            </button>
        </div>
    </div>
    : 
        <CountDown videoList={newVideo} timestart={newVideo.showing}/> 
    
    )
    
}

export default VideoPlayer