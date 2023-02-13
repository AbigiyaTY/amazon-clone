import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAwhFC2ylwGuEk_-7qLkDB3F8rtXvVmq58",
    authDomain: "clone-by-abigiya-c5240.firebaseapp.com",
    projectId: "clone-by-abigiya-c5240",
    storageBucket: "clone-by-abigiya-c5240.appspot.com",
    messagingSenderId: "836326844676",
    appId: "1:836326844676:web:410682a2e88a524e9f8851",
    measurementId: "G-Y815DG6XBC"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = firebaseapp.auth();
const db = firebaseapp.firestore();
export { auth, db };