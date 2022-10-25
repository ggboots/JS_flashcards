import React from 'react'
import { initializeApp } from 'firebase/app'


import { child, get, getDatabase, onValue, ref } from 'firebase/database'

function CheckFirebase(props){

  this.cardToPort = null;
  const app = initializeApp(firebaseConfig)
  // const database = getDatabase(app);
  
  const dbRef = ref(getDatabase());
  get(child(dbRef, `cards`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      this.cardToPort = snapshot.val().cardNumber
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  
//additional config required for .env variables
// https://firebase.google.com/docs/functions/config-env


    return (
        <Cards cardNumber={this.cardToPort}/>
    )
}

export default CheckFirebase