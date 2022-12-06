
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBpVDKAIO2R98rSTocwkhWovA0qhETTAnA",
    authDomain: "netflix-91d10.firebaseapp.com",
    projectId: "netflix-91d10",
    storageBucket: "netflix-91d10.appspot.com",
    messagingSenderId: "943823698081",
    appId: "1:943823698081:web:92955579450df16265d8e0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth }
export default db;

