import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvx_rgUvXzkfZnpKRMm7UkjOY78qN3Jxo",
    authDomain: "webshop-f0177.firebaseapp.com",
    databaseURL: "https://webshop-f0177.firebaseio.com",
    projectId: "webshop-f0177",
    storageBucket: "webshop-f0177.appspot.com",
    messagingSenderId: "276290446239",
    appId: "1:276290446239:web:2cb06f1a70dca364c053aa",
    measurementId: "G-E1FM06E5Z4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;