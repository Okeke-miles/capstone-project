import { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import Fuse from "fuse.js"
import "../VideoList/VideoList.scss"
import WatchList from '../WatchList/WatchList';
import RemoveWatchList from '../RemoveWatchList/RemoveWatchList';


function VideoList (){
    const [ videoList, setVideoList] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const [watchList, setWatchList] = useState([]);


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
			(item) => item.id !== video.id
		);

		setWatchList(newWatchList);
        saveToLocalStorage(newWatchList);
	};

    return(
        <>
        <div>
        <Search placeholder="Search"
        onChange={(e) => searchVideos(e.target.value)}/>
            <header>
                <nav>
                    {videoList.map(video => (
                    <div className='image-container d-flex justify-content-start m-3'>
                        <NavLink to={`videos/${video.id}`}>
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
                <p>MY WATCHLIST</p>
                {watchList.map(video => (
                    <div className='image-container d-flex justify-content-start m-3'>
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
               
             
            </header>                      
        </div>
      
        </>
   
    )
}

export default VideoList