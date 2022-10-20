import React, {useState, useEffect} from "react";
import Cards from "./Cards.jsx"

function Container () {

    const [word, setWord] = useState('');
    const [wordList, setWordList] = useState([]);
    const [cardObj, setCardObj] = useState({
        id: 0,
        word: '',
        definition: '',
        example: '' 
    })
    
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const [flashcards, setFlashcards] = useState([]);
    let numOfWords = flashcards.length - 1;
    
    const handleSubmit  = (e) =>{
        e.preventDefault();
        const newWord = {word};
        // console.log(newWord.word, ' added.');

        setWordList([...wordList, newWord.word]);

        fetch(url)
        .then((data) => data.json())
        .then((json) => {
            let sound = '';
            if (json[0].phonetics[0].audio) sound = json[0].phonetics[0].audio;      //if primary audio exists, use that for audio property
            else if (json[0].phonetics[1].audio) {sound = json[0].phonetics[1].audio;} //use alternate phonetics audio if first is null
            else sound = '';

            setCardObj({
                id: wordList.length + 1,
                word: newWord.word,
                definition: json[0].meanings[0].definitions[0].definition,
                example: (json[0].meanings[0].definitions[0].example) ? json[0].meanings[0].definitions[0].example : 'N/A',
                audio: sound,
                second: false
            })
        })
    }

    useEffect(() => {
        setFlashcards([...flashcards, cardObj]);
        console.log('New card object: ', cardObj);
    }, [cardObj]);
    
    useEffect(() => {
        console.log('flashcards list: ', flashcards);
    }, [flashcards]);

    return (
        <div>
            <div className="top">
            <label className="Total Words">Total Words: {numOfWords}</label>
            <form className="newWord" onSubmit={handleSubmit}>
                <label>
                    <input type="text" required id="newWord" placeholder="Enter word" value={word} onChange={(e) => setWord(e.target.value)}></input>
                </label>
                <input type="submit" value="Add to stack"></input>
            </form>
            </div>
            <hr></hr>
            <div>
                <Cards flashcards={flashcards}/>
            </div>
        </div>
    );
}

export default Container;