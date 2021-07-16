import { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import Fuse from "fuse.js"
import "../VideoList/VideoList.scss"
import Favourites from '../Favourites/Favourites';


function VideoList (){
    const [ videoList, setVideoList] = useState([])
    const [searchValue, setSearchValue] = useState('');

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
                        <div className='overlay d-flex align-items-center justify-content-center'>
					    <Favourites />
				        </div>
                    </div>
                        
                    ))}
                </nav>
             
            </header>                      
        </div>
      
        </>
   
    )
}

export default VideoList