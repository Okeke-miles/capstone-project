import { useState, useEffect } from 'react'
import axios from 'axios';
import "../AddVideo/AddVideo.scss"

function AddVideo( ){

    const addVideo = (e) => {
        e.preventDefault();
        const newVideo = {
            image: e.target.image.value,
            title: e.target.title.value,
            channel: e.target.channel.value,
            description: e.target.description.value,
            language: e.target.language.value,
            duration: e.target.duration.value,
            year: e.target.year.value,
            genre: e.target.genre.value,
            showing: e.target.showing.value,
            video: e.target.video.value
        }
        axios.post(`/api/add`, newVideo)
        .then(response =>{
        console.log(response)
        })
    }

    return(
        <div className="form__style">
            <h2>Add and Schedule Your Own Video</h2>
            <form onSubmit={(e)=>{
                e.preventDefault()
                e.target.reset()
                addVideo(e)
            }}>
                    <div className="form-group">
                        <label className="label__style" htmlFor="image">Image</label>
                        <input name="image" type="text" className="form-control" id="image"/>
                    </div>
                    <div className="form-group">
                        <label className="label__style" htmlFor="title">Title</label>
                        <input name="title" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="label__style" htmlFor="channel">Channel</label>
                        <input type="text" name="channel" className="form-control"/>    
                    </div>
                    <div className="form-group">
                        <label className="label__style" htmlFor="description">Description</label>
                        <input type="text" name="description" className="form-control"/>    
                    </div>
                    <div className="form-group">
                        <label className="label__style" htmlFor="year">Year</label>
                        <input type="number" name="year" className="form-control"/>    
                    </div>
                    <div className="form-group">
                        <label className="label__style" htmlFor="showing">Showing</label>
                        <input type="text" name="showing" className="form-control"/>    
                    </div>
                    <div className="form-group">
                        <label className="label__style" htmlFor="genre">Genre</label>
                        <input type="text" name="genre" className="form-control"/>    
                    </div>
                    <div className="form-group">
                        <label className="label__style" htmlFor="duration">Duration</label>
                        <input type="text" name="duration" className="form-control"/>    
                    </div>
                    <div className="form-group">
                        <label className="label__style" htmlFor="language">Language</label>
                        <input type="text" name="language" className="form-control"/>    
                    </div>
                    <div className="form-group">
                        <label className="label__style" htmlFor="video">Video</label>
                        <input type="text" name="video" className="form-control"/>    
                    </div>
                    <button type="submit" className="btn-primary">Submit</button>
            </form>
        </div>
    ) 
    
}

export default AddVideo