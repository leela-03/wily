import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDuXSTv_Sxnd35DCHyQTRAFG_qXGpm0lLM",
  authDomain: "wilyapp-62b56.firebaseapp.com",
  projectId: "wilyapp-62b56",
  storageBucket: "wilyapp-62b56.appspot.com",
  messagingSenderId: "286634942808",
  appId: "1:286634942808:web:aa4f64831f3aacaa69452d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()