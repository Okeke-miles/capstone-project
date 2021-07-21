import React from 'react';
import "../HomePage/HomePage.scss"
import collage from "../../assets/photos/collage.jpg"
import homePhoto from "../../assets/photos/jeshoots.jpg"
import theatre from "../../assets/photos/cinemas-unsplash.jpg"

function HomePage() {


    return(
            
        <main className= "home-container__style">
            <div className="hero-image__style">
                <p className="title-description__style">
                    Watch videos with friends!!! Now you can enjoy your favourite videos real time. Our auto-sync feature ensures a smooth synchronization of your videos with your friends. Our goal is to give you the cinema-feel in the comfort of your living room. 
                </p>
                
                <div className="home-body__style">
                    
                    <div className="first-desc__style">
                        <p className="feature-description__style">Watch with your friends from the comfort of your home! Friday nights just got a whole lot more fun. You can schedule to your convenience when you want a video to play. </p> 
                        <img className="homePhoto" src={homePhoto} alt="home"/>
                    </div>

                    <div className="cinema-desc__style">
                        <p className="mobile-description__style">The cinemas may be empty. Does not mean you have to watch your shows alone! Who says you cannot watch a movie with your friend in another city.</p>
                        <img className="cinemaPhoto" src={theatre} alt="cinema"/>
                        <p className="feature-description__style theater-desc__style">The cinemas may be empty. Does not mean you have to watch your shows alone! Who says you cannot watch a movie with your friend in another city.</p>
                    </div>

                    <div className="shows-desc__style">
                        <p className="feature-description__style">Watch your favourite movies, sports, music and comedy shows together! Not particularly feeling our collection? Not to worry, you can add your own! We wont get in your way.</p>
                        <img className="collage__style" src={collage} alt="movie-poster" />
                    </div>
                </div>
                  
            </div>
        </main>
    )
}

export default HomePage