import React, {Component} from "react";

class FlipCardButton extends Component{
    constructor(props){
        super(props);

        this.flipCard = this.flipCard.bind(this)
    }

    flipCard(){
        document.getElementById('cards').style.transform = 'rotateY(180deg)';
    }
    render(props){
        return(
            <div className="btn-cardFlip">
                <button className="btn" onClick={this.flipCard}>Flip Card</button>
            </div>
        )
    }
}

export default FlipCardButton