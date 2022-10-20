import React, {useState} from "react";
import Card from "./Card.jsx";

const Cards = ({flashcards}) => {
    const arr = [];
    flashcards.forEach(elem => {
        arr.push(<ul><Card flashcard={elem} key={elem.id}/></ul>);
    });

    return (
        <div>
            <h3>Your Learning list</h3>
            <ul className="card-stack">
                {arr[arr.length - 1]}
            </ul>
        </div>
    )
}

export default Cards;