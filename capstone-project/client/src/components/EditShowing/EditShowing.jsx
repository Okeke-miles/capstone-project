import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import "../EditShowing/EditShowing.scss"

function EditShowing( { updateShowing, videoId }){

    // const updateShowing = (videoId) => {
    //     axios.put(`/api/videos/${videoId}/edit`)
    //     .then(res => {
    //         videoId.showing(res.data)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // }


    // useEffect(()=> {
    //     axios.get(`/api/videos/${videoId}`)
    //         .then(res => {
    //             setVideoDetails(res.data)
    //         })
    //         .catch(err =>{
    //             console.log(err)
    //         })
    // }, [videoId])

    // useEffect(()=> {
    //     axios.get(`/api/videos/${videoId}`)
    //         .then(res => {
    //             setVideoDetails(res.data)
    //         })
    //         .catch(err =>{
    //             console.log(err)
    //         })
    // }, [videoId])
    
  

    // if (videoDetails == null) {
    //     return <main>Loading...</main>
    // }
    console.log(videoId)
    return(
        <div>

            <input type="text" placeholder="new show time"/>
            <button onClick={()=>updateShowing(videoId)}></button>
            
        </div>
    ) 
    
}

export default EditShowing