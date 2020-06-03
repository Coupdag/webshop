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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

// Check if user exist
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date(); 
// If user doesn't exist, create user
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

// Google firebase setup init

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;