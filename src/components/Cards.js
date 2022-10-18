import React from "react";

const Cards = (props) => (
        <div className="cards">
            <div className="front">
                <p>{props.name}</p>
            </div>
            <div className="back">
                <p>Back</p>
            </div>
        </div>
    )


export default Cards