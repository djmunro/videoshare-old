import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC68i94yMqjv_FpPZp6exGhA8-6u6yJouo',
  authDomain: 'videoshare-30db7.firebaseapp.com',
  databaseURL: 'https://videoshare-30db7.firebaseio.com',
  projectId: 'videoshare-30db7',
  storageBucket: 'videoshare-30db7.appspot.com',
  messagingSenderId: '427973476125',
  appId: '1:427973476125:web:b923d2a9622c4ef1122bf4',
  measurementId: 'G-6YWC6D0ZHH',
})

const db = firebaseApp.firestore()

export {db}
