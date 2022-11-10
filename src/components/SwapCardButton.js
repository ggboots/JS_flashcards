import React, {Component} from "react";

class SwapCardButton extends Component{
    constructor(props){
        super(props);

        this.cardSwap = this.cardSwap.bind(this);
    }

    cardSwap(){
        this.props.cardSwap();
    }

    render(){
        return(
            <div className="btn-swap-card">
                <button className="btn" onClick={this.cardSwap}>Draw New Card</button>
            </div>
        )
    }
}

export default SwapCardButton