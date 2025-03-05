import React from "react";
import App from "../App";
const Home =() =>{

    const GOOGLELOGIN=()=>{

    };
    const GitHubLOGIN=()=>{

    };
    return(
        <div>
            <h2>Welcome to Oauth Demo</h2>
            <button onClick={GOOGLELOGIN}>Login with GOOGLE LOGIN</button>
            <button onClick={GitHubLOGIN}>Login with Github LOGIN</button>

        </div>
    )
};
export default Home;