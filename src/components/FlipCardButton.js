import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React, {Component} from "react";

class FlipCardButton extends Component{
    constructor(props){
        super(props);

        this.flipCard = this.flipCard.bind(this)

        this.state = {
            showingFront: true
        }
    }

    flipCard(){
        if(this.state.showingFront === true){
            document.getElementById('cards').style.transform = 'rotateY(180deg)';
            this.state.showingFront = false
        } else if(this.state.showingFront === !true){
            document.getElementById('cards').style.transform = 'rotateY(0deg)';
            this.state.showingFront = true
        }
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