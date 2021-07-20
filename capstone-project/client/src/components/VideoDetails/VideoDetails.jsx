import { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import editIcon from "../../assets/icon/edit-24px.svg"
import "../VideoDetails/VideoDetails.scss"
import EditShowing from "../EditShowing/EditShowing"
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";

function VideoDetails(){

    const [videoDetails, setVideoDetails] = useState(null);
    // const [newShowing, setNewShowing] = useState(null)
    const { videoId } = useParams();

    useEffect(()=> {
        axios.get(`/api/videos/${videoId}`)
            .then(res => {
                setVideoDetails(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [videoId])

    const updateShowing = (event) => {
        event.preventDefault()
        const newEdit = {showing: event.target.showing.value}
        axios.put(`/api/videos/${videoId}`, newEdit
        )
        .then(res => {
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
        axios.get(`/api/videos/${videoId}`)
        .then(res => {
            setVideoDetails(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }



    if (videoDetails == null) {
        return <main>Loading...</main>
    }

    const { title, channel, description, image, language, duration, year, genre, showing } = videoDetails

    return(
        <>
         <Link className="back-link__style" to="/videos"> Back to Content </Link>
        <main className="videodetails-container__style">
            <img className="image__style" src={image} alt={title} />
            <div className="details-desc__style">
                <h1 className="desc-title__style" >{title}</h1>
                <div className="channel__style">Channel: {channel}</div>
                <div className="details-description__style">Description: {description}</div>
                <div className="language__style">Language: {language}</div>
                <div className="duration__style">Duration: {duration}</div>
                <div className="year__style">Year: {year}</div>
                <div className="genre__style">Genre: {genre}</div>
                <div className="showing__style">Showing: {showing}                
                </div>
                <form onSubmit={(e)=>{
                e.preventDefault()
                // e.target.reset()
                updateShowing(e)
                }}>
                    <label htmlFor="showing">Date</label>
                    <input type="text" name= "showing"placeholder="new show time"/>
                    <button type="submit" >Submit</button>
                </form>
                <DateTimePickerComponent placeholder="Choose a date and time"></DateTimePickerComponent>
            </div>
        </main>
       
        </>

    )
}

export default VideoDetails