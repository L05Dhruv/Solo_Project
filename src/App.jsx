import React, {useState} from "react";
import Container from "./Container.jsx"
import Cards from "./Cards.jsx"

function App () {
        return (
            <div>
                <h1 className="main">
                    Focab.io
                </h1>
                <p>Forever is a long time. </p><br></br>
                <a>
                    But we can help you remember words in the English language pretty much for the rest of your measly existence.
                </a>
                <div>
                   <Container/>
                </div>
            </div>
        );
}

export default App;