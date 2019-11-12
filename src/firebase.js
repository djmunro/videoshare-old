import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCEY5IcKAN2hUG2BPrFosj1OygkWKZfaAY",
  authDomain: "simplebojo.firebaseapp.com",
  databaseURL: "https://simplebojo.firebaseio.com",
  projectId: "simplebojo",
  storageBucket: "simplebojo.appspot.com",
  messagingSenderId: "823533222426",
  appId: "1:823533222426:web:77a28fc187836ac5"
});

const db = firebaseApp.firestore();

export { db };
