import React, {Component} from 'react';
import "../HomePage/HomePage.scss"
import axios from "axios";
import collage from "../../assets/collage.jpg"
import homePhoto from "../../assets/jeshoots.jpg"
import theatre from "../../assets/cinemas-unsplash.jpg"
import youtube from "../../assets/logo/youtube.jpg"

class HomePage extends Component{

    state = {
        collage:[]
    }

    componentDidMount(){
        axios.get(`/api/collage`)
        .then(res => res.data)
        .then(data => {
          this.setState({
            collage: data,
          });
        })
        .catch(error=>{console.log(error)})
        }

    render(){
        // const { collage } = this.state
        return(
            <div className="hero-image__style">
                <h1 className="title__style">WiiWatch</h1>
                <p title-description__style>
                    Watch videos with friends!!! Now you can enjoy your favourite videos real time. Our auto-sync feature ensures a smooth synchronization of your videos with your friends. Our goal is to give you the cinema-feel in the comfort of your living room.
                </p>
                <h2>Watch with your friends!</h2> 
                <img className="homePhoto" src={homePhoto} alt="home"/>
                <h2>The cinemas may be empty. Does not mean you have to watch your shows alone!</h2>
                <img className="cinemaPhoto" src={theatre} alt="cinema"/>
                <h2>Watch your favourite shows!</h2>
                <img className="collage__style" src={collage} alt="movie-poster" />
                <h2>Supported Content</h2>
                <img className="youtube-logo__style" src={youtube} alt="youtube-logo"/>
                {/* {(collage.map(item => (
                    <img className="collage__style" src={item.image} alt="movie-poster" />
                )))} */}
            </div>
        )
    }
}

export default HomePage