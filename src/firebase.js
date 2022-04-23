import firebase from "./firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAFDAE4Od7pgJg9WlyvuzxjvUit25IjasI",
    authDomain: "todo-app-77638.firebaseapp.com",
    projectId: "todo-app-77638",
    storageBucket: "todo-app-77638.appspot.com",
    messagingSenderId: "352820687196",
    appId: "1:352820687196:web:72a988361b5f60c3725199",
    measurementId: "G-JZS6D97EDF"
});

const db = firebaseApp.firestore();
export default db;