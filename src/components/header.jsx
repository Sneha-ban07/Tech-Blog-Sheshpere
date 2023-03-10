import React from "react";
import Navbar from "./navbar";

function Header(){
    return(

        <div id='main'>
            <Navbar/>
            <div className="name">
                <h1><span>Inspire and Empower</span> Women in Tech</h1>
                <h3>Contribute to the biggest Tech library Created by the women, for the women.</h3>
                <p className="details">
                To verify whether the application 
                has successfully started in the frontend click port 8081 and wait for the application to start
                </p>
                <a href="#" className="cv-btn">Get Started</a>
            </div>
        </div>
    )
}

export default Header;