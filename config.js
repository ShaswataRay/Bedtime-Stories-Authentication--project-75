import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCpfjliWqWso0APaTQxtc6fX4Qzb1teqag",
  authDomain: "alpha-beta-81f93.firebaseapp.com",
  databaseURL: "https://alpha-beta-81f93-default-rtdb.firebaseio.com",
  projectId: "alpha-beta-81f93",
  storageBucket: "alpha-beta-81f93.appspot.com",
  messagingSenderId: "878976275203",
  appId: "1:878976275203:web:a92ed866b743679278cf36"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
