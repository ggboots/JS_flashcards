import React, {Component} from "react";
import Cards from "./components/Cards.js"
import SwapButton from "./components/SwapButton.js"

import testImage from "./assests/webgl.png";
import testImage2 from "./assests/opengl_logo.png";

class App extends Component {
  constructor(props){
    super(props);

    // was refering to components state, updateCard is not there
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
          {id:1, name: "demo1"},
          {id:2, name: "demo2"},
          {id:3, name: "demo3"},
          {id:4, name: "demo4"},
          {id:5, name: "demo5"},
          {id:6, name: "demo6"}
      ],
      currentCard: {}
    }
  }

  componentDidMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.randomCard(currentCards)
    })

  }

  randomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    if(card === this.state.currentCard){
      this.randomCard(currentCards)
    }
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.randomCard(currentCards)
    })
    console.log("button functioning")
  }


  render(){
    return (
      <div className="App backdrop">
        <Cards name={this.state.currentCard.name

        }/>
        <div className="btn-container">
          <SwapButton cardSwap={this.updateCard}/>
          <button className="btn">Flip</button>
        </div>
    </div>
  );
}
}

export default App;


// setState updates the state of component
// .state refers to object state for component
// this. responding to runtime binding, it refers to object