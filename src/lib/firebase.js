import Firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyDBdKWOfH_XF5Ma2zRK2xlceiuzs6HqRzI",
    authDomain: "instagram-clone-d13ed.firebaseapp.com",
    projectId: "instagram-clone-d13ed",
    storageBucket: "instagram-clone-d13ed.appspot.com",
    messagingSenderId: "1080479899087",
    appId: "1:1080479899087:web:662f1409fee960d7fac6ba",
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

export { firebase, FieldValue }
