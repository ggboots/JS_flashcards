import React, {Component} from "react";
//import { initializeApp } from "firebase/app";
//import { getDatabase, ref, onValue } from "firebase/database"
//import * as dotenv from 'dotenv'
//dotenv.config()

// components
import Cards from "./components/Cards.js"
import SwapCardButton from "./components/SwapCardButton.js"
//import { firebaseConfig } from "./components/firebaseConfig.js";


class App extends Component {
  constructor(props){
    super(props);

    //this.app = initializeApp()
    //this.database = getDatabase(app)
    //ref
    //this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  componentDidMount(){
    const currentCards = this.state.cards;

    // this.database.on('card_added_to_deck', snap => {
    //   currentCards.push({
    //     id: snap.key,

    //   })
    // })

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
  }


  if(loading){
    return <h1>Loading ...</h1>
  }
  render(){
    return (
      <div className="App backdrop">
        <Cards 
        // name={this.state.currentCard.name
        // }
        />
        <div className="btn-container">
          <SwapCardButton cardSwap={this.updateCard}/>
          <button className="btn">Flip</button>
        </div>
    </div>
  );
}
}

export default App;
