import React, {useState, useEffect} from "react";

function WordForm () {
    const [word, setWord] = useState('');
    const [wordList, setWordList] = useState(['welcome']);

    const handleSubmit  = (e) =>{
        e.preventDefault();
        const newWord = {word};
        console.log(newWord.word, ' added.');

        setWordList(wordList.concat(newWord.word));
        console.log(wordList);

        // fetch('http://localhost:3000/words', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json"},
        //     body: JSON.stringify(newWord)
        // }).then(() => {
        //     console.log('new word added');
        // });
    }

    // useEffect(() => {
    //     console.log('useEffect ', word);
    // }, [word]);

    return (
        <div>
        <form className="newWord" onSubmit={handleSubmit}>
            <label>Enter a word:
                <input type="text" required id="newWord" value={word} onChange={(e) => setWord(e.target.value)}></input>
            </label>
            <input type="submit" value="Add to stack"></input>
        </form>
        </div>
    );
}

export default WordForm;