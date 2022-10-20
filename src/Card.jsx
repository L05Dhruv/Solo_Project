import React from "react";

const Card = ({flashcard}) => {

    return(
        <div className="CardBox">
            <h4>Word: {flashcard.word}</h4>
            <h4>Definition: {flashcard.definition}</h4>
            <h4 className="example">Example: {flashcard.example}</h4>
        </div>
    )
}

export default Card;