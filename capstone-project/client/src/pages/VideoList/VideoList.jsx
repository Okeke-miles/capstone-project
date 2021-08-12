import { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from "react-router-dom";
import Search from "../../components/Search/Search";
import Fuse from "fuse.js"
import "../VideoList/VideoList.scss"
import WatchList from '../../components/WatchList/WatchList';
import RemoveWatchList from "../../components/RemoveWatchList/RemoveWatchList";



function VideoList (){

    const [ videoList, setVideoList] = useState([])
    const [watchList, setWatchList] = useState([]);

//API to get the list of videos
    useEffect(() => {
        axios.get(`/api/videos`)
            .then(res => {
                setVideoList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const searchVideos = (pattern) => {
        if (!pattern) {
          setVideoList(videoList);
          return;
        }

        const fuse = new Fuse(videoList, {
            keys: ["title", "genre"],
        });
        
        const result = fuse.search(pattern);

        const matches = [];
        if (!result.length) {
            setVideoList([]);
        } else {
            result.forEach(({item}) => {
            matches.push(item);
            });
            setVideoList(matches);
        }
    }
    useEffect(() => {
        const newList = localStorage.getItem('react-app-watchList')
        const videoWatchList = JSON.parse(newList);

		setWatchList(videoWatchList);
	}, []);

    const saveToLocalStorage = (items) => {
		localStorage.setItem('react-app-watchList', JSON.stringify(items));
	};

    const addWatchListVideo = (video) => {
		const newWatchList = [...watchList, video];
		setWatchList(newWatchList);
        saveToLocalStorage(newWatchList);
	};

    const removeWatchListVideo = (video) => {
		const newWatchList = watchList.filter(
			(item) => item._id !== video._id
		);

		setWatchList(newWatchList);
        saveToLocalStorage(newWatchList);
	};

    
    const sportsVideoGenre = videoList.filter(video=> video.genre === "sports")
    const healthVideoGenre = videoList.filter(video=> video.genre === "health")
    const religiousVideoGenre = videoList.filter(video=> video.genre === "religion")
    const techVideoGenre = videoList.filter(video=> video.genre === "tech")
    const lifestyleVideoGenre = videoList.filter(video=> video.genre === "lifestyle")
    const wildlifeVideoGenre = videoList.filter(video=> video.genre === "wildlife")
    const musicVideoGenre = videoList.filter(video=> video.genre === "music")
    const otherVideoGenre = videoList.filter(video=> video.genre !== "music" && video.genre !== "sports" && video.genre !== "health" && video.genre !== "religion" && video.genre !== "tech" && video.genre !== "lifestyle" && video.genre !== "wildlife")

    return(

        <>
        
        <div className="videolist-container__style">
            <Search placeholder="Search"
            onChange={(e) => searchVideos(e.target.value)}/>
            <div >
                <main className="videolist__style">
                <h2 className="wildlife__style">WildLife</h2>
                        <nav className="wildlife-container__style">
                            {wildlifeVideoGenre.map(video => (
                            <div key={video._id} className='image-container d-flex justify-content-start m-3'>
                                <NavLink to={`videos/${video._id}`}>
                                    <img className="thumbnail__style" 
                                    key={video.id}
                                    src={video.image} alt="video-thumbnail"/>
                                </NavLink>
                                <div className='overlay d-flex align-items-center justify-content-center' onClick={() => addWatchListVideo(video)}>
                                    <WatchList />
                                </div>
                            </div>  
                            ))}
                        </nav>
                    <h2 className="sports__style" >Sports</h2>
                        <nav className="sports-container__style">
                            {sportsVideoGenre.map(video => (
                            <div key={video._id} className='image-container d-flex justify-content-start m-3'>
                                <NavLink to={`videos/${video._id}`}>
                                    <img className="thumbnail__style" 
                                    key={video.id}
                                    src={video.image} alt="video-thumbnail"/>
                                </NavLink>
                                <div className='overlay d-flex align-items-center justify-content-center' onClick={() => addWatchListVideo(video)}>
                                    <WatchList />
                                </div>
                            </div>  
                            ))}
                        </nav>
                        <h2 className="health__style">Health</h2>
                        <nav className="health-container__style">
                            {healthVideoGenre.map(video => (
                            <div key={video._id} className='image-container d-flex justify-content-start m-3'>
                                <NavLink to={`videos/${video._id}`}>
                                    <img className="thumbnail__style" 
                                    key={video.id}
                                    src={video.image} alt="video-thumbnail"/>
                                </NavLink>
                                <div className='overlay d-flex align-items-center justify-content-center' onClick={() => addWatchListVideo(video)}>
                                    <WatchList />
                                </div>
                            </div>  
                            ))}
                        </nav>
                        <h2 className="religion__style">Religion</h2>
                        <nav className="religion-container__style">
                            {religiousVideoGenre.map(video => (
                            <div key={video._id} className='image-container d-flex justify-content-start m-3'>
                                <NavLink to={`videos/${video._id}`}>
                                    <img className="thumbnail__style" 
                                    key={video.id}
                                    src={video.image} alt="video-thumbnail"/>
                                </NavLink>
                                <div className='overlay d-flex align-items-center justify-content-center' onClick={() => addWatchListVideo(video)}>
                                    <WatchList />
                                </div>
                            </div>  
                            ))}
                        </nav>
                        <h2 className="tech__style">Tech</h2>
                        <nav className="tech-container__style">
                            {techVideoGenre.map(video => (
                            <div key={video._id} className='image-container d-flex justify-content-start m-3'>
                                <NavLink to={`videos/${video._id}`}>
                                    <img className="thumbnail__style" 
                                    key={video.id}
                                    src={video.image} alt="video-thumbnail"/>
                                </NavLink>
                                <div className='overlay d-flex align-items-center justify-content-center' onClick={() => addWatchListVideo(video)}>
                                    <WatchList />
                                </div>
                            </div>  
                            ))}
                        </nav>
                        <h2 className="lifestyle__style">LifeStyle</h2>
                        <nav className="lifestyle-container__style">        
                            {lifestyleVideoGenre.map(video => (
                            <div key={video._id} className='image-container d-flex justify-content-start m-3'>
                                <NavLink to={`videos/${video._id}`}>
                                    <img className="thumbnail__style" 
                                    key={video.id}
                                    src={video.image} alt="video-thumbnail"/>
                                </NavLink>
                                <div className='overlay d-flex align-items-center justify-content-center' onClick={() => addWatchListVideo(video)}>
                                    <WatchList />
                                </div>
                            </div>  
                            ))}
                        </nav>
                        
                        <h2 className="music__style">Music</h2>
                        <nav className="music-container__style">    
                            {musicVideoGenre.map(video => (
                            <div key={video._id} className='image-container d-flex justify-content-start m-3'>
                                <NavLink to={`videos/${video._id}`}>
                                    <img className="thumbnail__style" 
                                    key={video.id}
                                    src={video.image} alt="video-thumbnail"/>
                                </NavLink>
                                <div className='overlay d-flex align-items-center justify-content-center' onClick={() => addWatchListVideo(video)}>
                                    <WatchList />
                                </div>
                            </div>  
                            ))}
                        </nav>
                        <p className="watchlist__style">MY WATCHLIST</p>
                        <div className="watchlist-container__style">
                        {watchList.map(video => (
                            <div key={video._id} className='image-container d-flex justify-content-start m-3'>
                                <NavLink to={`videos/${video.id}`}>
                                    <img className="thumbnail__style" 
                                    key={video.id}
                                    src={video.image} alt="video-thumbnail"/>
                                </NavLink>
                                <div className='overlay d-flex align-items-center justify-content-center' onClick={() => removeWatchListVideo(video)}>
                                    <RemoveWatchList />
                                </div>
                            </div>
                        ))}
                        </div> 
                </main>   
            </div>  
              

            <NavLink to="/add">
                <p className="add-button__style">Don't see something you like? We got you covered. Click here to add your own video.</p>
            </NavLink>               
        </div>
      
        </>
   
    )
}

export default VideoList