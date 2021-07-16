import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

function VideoDetails(){

    const [videoDetails, setVideoDetails] = useState(null);
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
    
  

    if (videoDetails == null) {
        return <main>Loading...</main>
    }

    const { title, channel, description, image, language, duration, year, genre, showing } = videoDetails

    return(
        <main>
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <h2>Channel:</h2>
            <p>{channel}</p>
            <h2>Description:</h2>
            <p>{description}</p>
            <h2>Language:</h2>
            <p>{language}</p>
            <h2>Duration:</h2>
            <p>{duration}</p>
            <h2>Year:</h2>
            <p>{year}</p>
            <h2>Genre:</h2>
            <p>{genre}</p>
            <h2>Showing:</h2>
            <p>{showing}</p>
            <Link to="/videos"> Back to Video </Link>
        </main>

    )
}

export default VideoDetails