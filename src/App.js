import React from "react";
import Cards from "./components/Cards.js"
import SwapButton from "./components/SwapButton.js"

import testImage from "./assests/webgl.png";
import testImage2 from "./assests/opengl_logo.png";

class App extends React.Component {
  constructor(props){
    super(props);

    //this.updateCard = this.state.updateCard.bind(this);

    this.state = {
      cards: [
          {id:1, name: "demo1", cardImage: testImage},
          {id:2, name: "demo2", cardImage: testImage2}
      ],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.randomCard(currentCards)
    })

  }

  randomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    // if(card === this.state.currentCard){
    //   this.randomCard(currentCards)
    // }
    return(card);
  }

  updateCard(){
    console.log("hello")
    // const currentCards = this.state.cards;
    // this.setState({
    //   currentCards: this.randomCard(currentCards)
    // })
  }


  render(){
    return (
      <div className="App backdrop">
        <Cards name={this.state.currentCard.name
              //cardImage={this.state.cards.cardImage}
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
