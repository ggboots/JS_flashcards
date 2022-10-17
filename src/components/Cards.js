import React from "react";
import testImage from "../assests/webgl.png";
import testImage2 from "../assests/opengl_logo.png";

function Cards(props){
    return(
        <div className="cards">
            <div className="front">
                <p>{props.name}</p>
                <img src={props.cardImage}></img>
            </div>
            <div className="back">
                <p>Back</p>
            </div>
        </div>
    )
}

export default Cards