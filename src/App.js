import React, {Component} from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database"
// import { getFirestore } from "firebase-admin/firestore";
import { getDownloadURL, getStorage } from "firebase/storage";
import { ref as sRef } from "firebase/storage";

import Cards from "./components/Cards.js"
import SwapCardButton from "./components/SwapCardButton.js"
import FlipCardButton from "./components/FlipCardButton.js";
// import { getFirestore } from "firebase-admin/firestore";
// import { firebaseConfig } from "./components/firebaseConfig.js"
import { firebaseConfig } from "./bin";

class App extends Component {
  constructor(props){
    super(props);

    this.app = initializeApp(firebaseConfig)
    this.database = getDatabase()
    this.storage = getStorage()

    this.updateCard = this.updateCard.bind(this);
    
    this.state = {
      cards: [],
      currentCard: {},
      currentFront: {},
      currentBack: {}
    }
  }
  
  
  componentDidMount(){
    const currentCards = this.state.cards;

    const databaseRef = ref(this.database, 'cards');
    onValue(databaseRef, (snapshot) => {
      snapshot.forEach(function(snapshot){
        console.log(snapshot.val())
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
    const cardFrontRefToString = this.state.currentCard.imgFront.toString()
    const cardBackRefToString = this.state.currentCard.imgBack.toString()
    const cardFrontRef = sRef(StorageRef, `${cardFrontRefToString}`)
    const cardBackRef = sRef(StorageRef, `${cardBackRefToString}`)

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
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    // this.setState({
    //   currentFront: card.imgFront,
    // })
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })

    

    // getDownloadURL(cardBackRef)
    //   .then((url) => {
    //     const backImage = document.getElementById('back-image')
    //     backImage.setAttribute('src', url)
    //   })
    //   .catch((error) => {

    //   })
  }

  render(){
    return (
      <div className="App backdrop">
        <div className="card-container">
          <Cards 
            cardName={this.state.currentCard.cardName}
            cardDescription={this.state.currentCard.cardDescription}
            frontImage={this.state.currentCard.imgFront}
          />
        </div>
        <div className="btn-container">
          <SwapCardButton cardSwap={this.updateCard}/>
          <FlipCardButton className="btn"/>
        </div>
    </div>
  );
}
}

export default App;



// --> Realtime database
// 
// class App extends Component {
//   constructor(props){
//     super(props);

//     this.app = initializeApp(firebaseConfig)
//     this.database = getDatabase()
//     this.storage = getStorage()

//     this.updateCard = this.updateCard.bind(this);
    
//     this.state = {
//       cards: [],
//       currentCard: {},
//     }
//   }
  
//   componentDidMount(){
//     const currentCards = this.state.cards;

//     const databaseRef = ref(this.database);
//     onValue(databaseRef, (snapshot) => {
//       snapshot.forEach(function(snapshot){
//         console.log(snapshot.val())
//         currentCards.push({
        

//           // String value
//           name: snapshot.val().name,
//           description: snapshot.val().description,
//           image: snapshot.val().image
//         })
//       })

//       this.setState({
//         cards: currentCards,
//         currentCard: this.getRandomCard(currentCards)
//       })
      
//     });
//   }

//   getRandomCard(currentCards){
//     var card = currentCards[Math.floor(Math.random() * currentCards.length)];
//     return(card);
//   }

//   updateCard(){
//     const currentCards = this.state.cards
//     this.setState({
//       cards: currentCards,
//       currentCard: this.getRandomCard(currentCards)
//     })

//   }

//   render(){
//     return (
//       <div className="App backdrop">
//         <div className="card-container">
//           <Cards 
//             name={this.state.currentCard.name}
//             description={this.state.currentCard.description}
//             image={this.state.currentCard.image}
//           />
//         </div>
//         <div className="btn-container">
//           <SwapCardButton cardSwap={this.updateCard}/>
//           <button className="btn">Flip</button>
//         </div>
//     </div>
//   );
// }
// }