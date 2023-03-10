import React from "react";

function BlogBox(props){
    return(
        <div className="b-box">
            <div className="a-b-img">
                <img src={props.image}/>
            </div>
            <div className="s-b-text">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default BlogBox;

