import React, {useState} from "react";
import Card from "./Card.jsx";

const Cards = ({flashcards}) => {
    const arr = [];
    flashcards.forEach(elem => {
        arr.push(<Card flashcard={elem} key={elem.id}/>);
    });

    return (
        <div className="card-stack">
            <h3>Your Learning list</h3>
            {arr}
        </div>
    )
}

export default Cards;