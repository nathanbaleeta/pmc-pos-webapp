import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAR6d8SdTeQzDF3__fIsijEzSI2HbIDUxQ",
  authDomain: "pmc-pos.firebaseapp.com",
  databaseURL: "https://pmc-pos.firebaseio.com",
  projectId: "pmc-pos",
  storageBucket: "pmc-pos.appspot.com",
  messagingSenderId: "995676490033",
  appId: "1:995676490033:web:2ebc8f108ba62215b7c810",
};
firebase.initializeApp(config);

export default firebase;
