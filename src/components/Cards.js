import React from "react";

const Cards = (props) => (
        <div id="cards" className="cards">
            <div className="front">
                <p>{props.cardName}</p>
                <img id='front-image' height="200px" width="120px" alt=""/>
            </div>
            <div className="back">
                <p>{props.cardDescription}</p>
                <img id='back-image' height="200px" width="120px" alt=""/>
            </div>
        </div>
    )


export default Cards