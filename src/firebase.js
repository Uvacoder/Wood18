import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBPeOquVVZ1HVs3nFBqxBVOE69o9Kumjbs",
    authDomain: "woodwork-vue.firebaseapp.com",
    projectId: "woodwork-vue",
    storageBucket: "woodwork-vue.appspot.com",
    messagingSenderId: "816478563748",
    appId: "1:816478563748:web:bc791ebedf2289b98c2531",
    measurementId: "G-9TXDQH0CYG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Utilize
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// Collection ref
const woodworkersCollection = db.collection('woodworkers');
const productsCollection = db.collection('products');

export {
    db,
    auth,
    storage,
    woodworkersCollection,
    productsCollection
}