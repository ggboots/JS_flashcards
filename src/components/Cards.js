import React from "react";

const Cards = (props) => (
        <div id="card" className="card">
            <div className="front">
                <img id='front-image' alt=""/>
            </div>
            <div className="back">
                <img id='back-image' height="640px" width="320px" alt=""/>
            </div>
        </div>
    )


export default Cards