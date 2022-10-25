import React, {Component} from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get, child } from "firebase/database"

// components
import Cards from "./components/Cards.js"
import SwapCardButton from "./components/SwapCardButton.js"
//import { firebaseConfig } from "./components/firebaseConfig.js";


class App extends Component {
  constructor(props){
    super(props);

    // firebase config needs to be in constructor to create object

    this.app = initializeApp(firebaseConfig)
    this.database = getDatabase()
    this.updateCard = this.updateCard.bind(this);
    
    this.state = {
      cards: [],
      currentCard: {}
    }
  }
  
  componentDidMount(){
    const currentCards = this.state.cards;

    // makes references to database
    // then foreach object in snapshot, push to currentCards var
    const databaseRef = ref(this.database, 'cards/');
    onValue(databaseRef, (snapshot) => {
      snapshot.forEach(function(snapshot){
        console.log(snapshot.val())
        currentCards.push({
          cardNumber: snapshot.val().cardNumber,
          cardName: snapshot.val().cardName,
          frontShowing: snapshot.val().frontShowing,
          imgFront: snapshot.val().imgFront,
          imgBack: snapshot.val().imgBack,
        })
      })

      //after db ref, set state of new object values
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
      
    });
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    // if(card === this.state.currentCard){
    //   this.getRandomCard(currentCards)
    // }
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })

  }

  cardsLoading(){
    let loader = document.getElementById('preloader');
    window.addEventListener('load', function() {
      loader.style.display = 'none';
    })
  }

  render(){
    return (
      <div className="App backdrop">
        <Cards 
          cardNumber={this.state.currentCard.cardNumber}
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
// ref - references a place in the database, first parameter is database
// the second is the place within database, if empty, will just choose root as dir

// onValue() - is called everytime there is change to the db
// may consider moving to get(), to reduce frequency of calls to db