import React, {Component} from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database"
import { getDownloadURL, getStorage } from "firebase/storage";
import { ref as sRef } from "firebase/storage";
import { firebaseConfig } from "./bin";

import Cards from "./components/Cards.js"
import SwapCardButton from "./components/SwapCardButton.js"
import FlipCardButton from "./components/FlipCardButton.js";


class App extends Component {
  constructor(props){
    super(props)

    this.app = initializeApp(firebaseConfig)
    this.database = getDatabase()
    this.storage = getStorage()

    this.updateCard = this.updateCard.bind(this);
    
    this.state = {
      cards: [],
      currentCard: {},
      currentFront: {},
      currentBack: {},
      frontShowing: true
    }
  }
  
  componentDidMount(){
    const currentCards = this.state.cards;

    const databaseRef = ref(this.database, 'cards');
    onValue(databaseRef, (snapshot) => {
      snapshot.forEach(function(snapshot){
        currentCards.push({
        
          cardNumber: snapshot.val().cardNumber,
          cardName: snapshot.val().cardName,
          cardDescription: snapshot.val().cardDescription,
          frontShowing: snapshot.val().frontShowing,
          imgFront: snapshot.val().imgFront,
          imgBack: snapshot.val().imgBack,
        })
      })

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards),
      })
    });
  }

  componentDidUpdate(){
    const StorageRef = sRef(this.storage);
    const cardFrontRef = sRef(StorageRef, `${this.state.currentCard.imgFront.toString()}`)
    const cardBackRef = sRef(StorageRef, `${this.state.currentCard.imgBack.toString()}`)

      getDownloadURL(cardFrontRef)
        .then((url) => {
          const image = document.getElementById('front-image');
          image.setAttribute('src', url)
        })
        .catch((error) => {

        })

      getDownloadURL(cardBackRef)
        .then((url) => {
          const backImage = document.getElementById('back-image')
          backImage.setAttribute('src', url)
        })
        .catch((error) => {

        })
        
  }

  getRandomCard(currentCards){
    const checkRepeatCard = this.state.currentCard.cardNumber; 
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];

    // check for same value, and then rerandomis until statement is happy
    while(checkRepeatCard === card.cardNumber){
      card = currentCards[Math.floor(Math.random() * currentCards.length)];
    }
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    document.getElementById('card').style.transform = 'rotateY(0deg)';
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards),
      frontShowing: true
    })

  }

  // change to arrow function
  // https://bobbyhadz.com/blog/react-typeerror-cannot-read-property-setstate-of-undefined
  flipCard = () => {
    if(this.state.frontShowing === true){
      document.getElementById('card').style.transform = 'rotateY(180deg)';
      this.setState({
          frontShowing: false
      })
    } else if(this.state.frontShowing === !true){
      document.getElementById('card').style.transform = 'rotateY(0deg)';
      this.setState({
          frontShowing: true
      })
    }
  }

  render(){
    return (
      <div className="App">
        <div className="card-container">
          <Cards 
            cardName={this.state.currentCard.cardName}
            cardDescription={this.state.currentCard.cardDescription}
            frontImage={this.state.currentCard.imgFront}
          />
        </div>
        <div className="btn-container">
          <SwapCardButton cardSwap={this.updateCard}/>
          <FlipCardButton flipCard={this.flipCard}/>
        </div>
    </div>
  );
}
}

export default App;