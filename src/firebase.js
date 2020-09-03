import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdBkSbyfxmpyr8RJFbt7VcLJwAM-DjNgI",
  authDomain: "facebook-messenger-clone-97e3c.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-97e3c.firebaseio.com",
  projectId: "facebook-messenger-clone-97e3c",
  storageBucket: "facebook-messenger-clone-97e3c.appspot.com",
  messagingSenderId: "1062331767222",
  appId: "1:1062331767222:web:b39ecfc3b65312e5928917",
  measurementId: "G-KM4TCWH6FM"
});
const db = firebaseApp.firestore();
export default db
