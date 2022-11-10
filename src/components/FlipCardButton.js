import React, {Component} from "react";

class FlipCardButton extends Component{
    constructor(props){
        super(props);

        this.flipCard = this.flipCard.bind(this);
    }

    flipCard(){
        this.props.flipCard();
    }

    render(props){
        return(
            <div className="btn-flip-card">
                <button className="btn" onClick={this.flipCard}>Flip Card</button>
            </div>
        )
    }
}

export default FlipCardButton