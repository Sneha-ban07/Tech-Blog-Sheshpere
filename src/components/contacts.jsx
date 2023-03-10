import React from "react";

function Contacts(){

    return(
        <div id='contact'>
            <h3>Send us mail: </h3>
            <div className="contact-input">
                <input type='email' placeholder="Example@abc.com"></input>
                <a href="#">Contact</a>
            </div>
            <p>Email: Support@Sheshpere.com</p>
            <p>Call us: 54667865</p>
        </div>
    )
}

export default Contacts;
