import React, {useState} from "react";

function App () {
        return (
            <div>
                <h1 className="main">
                    Focab.io
                </h1>
                <p1>Forever is a long time. </p1><br></br>
                <p2>
                    But we can help you remember words in the English language pretty much for the rest of your measly existence.
                </p2>
                
                <form>
                    <label>Enter a word:
                    <input type="text" id="newWord"></input>
                    </label>
                    <input type="submit" value="Add to stack"></input>
                </form>
            </div>
        );
}

export default App;