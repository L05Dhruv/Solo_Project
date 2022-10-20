import React, {useState, useEffect} from "react";
import soundIcon from "../speaker-volume.png"

const Card = ({flashcard}) => {
    const handleIClick = () => {
        // setAudio(new Audio(flashcard.audio))
        const sound = new Audio(flashcard.audio);
        console.log(sound);
        sound.play();
    }


    return(
        <div className="CardBox">
            <label className="checkContainer">
                <input type="checkbox" className="mark-off"></input>
            </label>
            <h4>Word: {flashcard.word}</h4>
            <h4>Definition: {flashcard.definition}</h4>
            <h4 className="example">Example: {flashcard.example}</h4>
            <a href="#"><img src={soundIcon} alt="sound logo" height="30px" width="30px" onClick={handleIClick} /></a>
        </div>
    )
}

export default Card;