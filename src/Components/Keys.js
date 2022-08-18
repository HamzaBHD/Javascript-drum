import React, { useEffect } from "react"
import './Keys.css';


export default function Keys({clip, volume, handleClick, active}) {
 
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [active])

    function playSound() {
        if (active){
            const audio = document.getElementById(clip.keyTrigger)
            audio.volume = volume;
            audio.currentTime = 0;
            audio.play()
        }
      }
      
      function handleKeyPress(e) {
        if(e.keyCode === clip.keyCode){
            playSound();
        }
      }

    return (
        <div
             className="button"
             onClick={() => {playSound() ; handleClick()}}>
                {clip.keyTrigger}
            <audio className="audio--tag"
                   id={clip.keyTrigger} 
                   src={clip.url}>
            </audio>
        </div>
    )
}