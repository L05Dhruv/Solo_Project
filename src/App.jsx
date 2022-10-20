import React, {useState} from "react";
import WordForm from "./WordForm.jsx"

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
                <div className="top">
                   <label className="Total Words">Total Words: </label>  <WordForm/>
                </div>
                <hr></hr>
            </div>
        );
}

export default App;