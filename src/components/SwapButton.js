import React, {Component} from "react";

class SwapButton extends Component{
    constructor(props){
        super(props);

        this.cardSwap = this.cardSwap.bind(this);
    }

    cardSwap(){
        this.props.cardSwap();
    }

    render(props){
        return(
            <div className="btn-cardSwap">
                <button className="btn" onClick={this.cardSwap}>Draw New Card</button>
            </div>
        )
    }
}

export default SwapButton