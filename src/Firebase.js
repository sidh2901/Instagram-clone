import firebase from "firebase";


const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyCeFHeUChKnvdX0BXcRB2LqMPX6jU2KQz8",
        authDomain: "instagram-clone-12828.firebaseapp.com",
        projectId: "instagram-clone-12828",
        storageBucket: "instagram-clone-12828.appspot.com",
        messagingSenderId: "523404200706",
        appId: "1:523404200706:web:1a968808d413c213f7901b",
        measurementId: "G-RKH6JV7XNK"
   
});
const db =firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };