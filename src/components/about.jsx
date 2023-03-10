import React from "react";

function About(props){
    return(
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h1 id="abouth2">About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia nisi dolorem illum, 
                    autem magni placeat! A, cum possimus nobis voluptas adipisci eos incidunt? Facere
                     non quod minima temporibus velit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia nisi dolorem illum, 
                    autem magni placeat! A, cum possimus nobis voluptas adipisci eos incidunt? Facere
                     non quod minima temporibus velit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia nisi dolorem illum, 
                    autem magni placeat! A, cum possimus nobis voluptas adipisci eos incidunt? Facere
                     non quod minima temporibus velit.</p>
            </div>
        </div>
    )
}
export default About;