import React, {useState} from "react";
import Container from "./Container.jsx"

function App () {
        return (
            <div>
                <h1 className="title"> Focab.io </h1>
                <ul className="menu">
                    <li><a href="/signup" className="signUpButton"><button>Sign Up</button></a></li>
                    <li><a href="/login" className="logInButton"><button>Log In</button></a></li>
                </ul>
                
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