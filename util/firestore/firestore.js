
// FIRESTORE
import * as firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase-firestore'
import { firebaseConfig } from '../../config';


//checks to see if app is already initialized before running again
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore();

export default db;