import React from 'react'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './components/firebaseConfig';

import { child, get, getDatabase, onValue, ref } from 'firebase/database'


function CheckFirebase(props){
const app = initializeApp(firebaseConfig)
// const database = getDatabase(app);

const dbRef = ref(getDatabase());
get(child(dbRef, `cards`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

//additional config required for .env variables
// https://firebase.google.com/docs/functions/config-env



    return (
        <div className='App backdrop'>
            <h3>{props.name}Hello</h3>
            
        </div>
    )
}

export default CheckFirebase