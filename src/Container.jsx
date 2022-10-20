import React, {useState, useEffect} from "react";
import Cards from "./Cards.jsx"

function WordForm () {
    const [word, setWord] = useState('');
    const [wordList, setWordList] = useState([]);
    const numOfWords = wordList.length;

    const handleSubmit  = (e) =>{
        e.preventDefault();
        const newWord = {word};
        console.log(newWord.word, ' added.');

        setWordList([...wordList, newWord.word]);

        // fetch('http://localhost:3000/words', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json"},
        //     body: JSON.stringify(newWord)
        // }).then(() => {
        //     console.log('new word added');
        // });
    }

    useEffect(() => {
        console.log('useEffect ', wordList);
    }, [wordList]);

    return (
        <div className="top">
            <label className="Total Words">Total Words: {numOfWords}</label>
            <form className="newWord" onSubmit={handleSubmit}>
                <label>
                    <input type="text" required id="newWord" placeholder="Enter word" value={word} onChange={(e) => setWord(e.target.value)}></input>
                </label>
                <input type="submit" value="Add to stack"></input>
            </form>
        </div>
    );
}

export default WordForm;