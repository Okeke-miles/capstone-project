import { useState, useEffect, } from 'react'
import "../CountDown/CountDown.scss"

function CountDown( { timestart, videoList }){

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear()

        const difference = +new Date(timestart) - +new Date()

        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };       
        }

        return timeLeft
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      });
    
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
      
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

      const refreshPage = ()=>{
        window.location.reload();
     }

      if (timerComponents.length===0){
            return refreshPage()
      }


    return (
        <div className="countdown__style">
            <h1> {videoList.title} plays in: {timerComponents.length ? timerComponents : 
            <span>Video has started!</span>} </h1> 
            <img className="countdown-img__style" src={videoList.image} alt={videoList.title}/>
        </div>
    )
}

export default CountDown