# Javascript-Flashcards (React+Firebase)
Coding Cards Flash cards for Javascript and Data Structures

![Coding Card Demo](/src/styles/CodingCardDemo.gif)

## Project Tools - In Description
* #### React App 
Faster setup for project, using components classes to setState for currentCard value and Cards Object collection, Component lifecycle used when referencing database and making changes, ComponentDidMount() was used to get JSON data and push into state array of objects, ComponentDidUpdate() reference Firebase Storage to download image data once component state was set
---
* #### Realtime Database 
more efficient than Cloud Firestore for this small app, with lower latency when loading data, using realtime database as card data is stored as a single json document, making it easier to work with
played around with firestore cloud and mongodb to difference approaches, realtime database made more sense for efficiency
---
* #### Firebase Cloud Functions
Enviromental Variables was used for API keys security, there was an issue with using the react default .env, would return error of database being in different region, my way around this was to use Cloud function which was now supporting environmental variables
* * *
* #### Firebase Storage
First time using Firebase Storage, saved flashcards images onto firebase storage and set the cards attributes in file name, then using JSON data from realtime database, made a reference call of cards attribute (such as front/back, card number) to load image to web app
* * * 


Project database has been taken down, coverted code to access data from local folders in project for private use only

> out of respect to the developer who made these cards, i have not submitted to any cloud or repo which can be publicly accessed 

Setup Guide:
1. Run 'npm install'
2. Firebase config file and connect
3. upload JSON data to db
4. Upload Images to FirebaseStorage
5. Enjoy 🤙🏽

![Firebase React](/src/styles/FirebaseReact.webp)

