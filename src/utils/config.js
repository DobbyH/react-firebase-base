import firebase from "firebase";

// Initialize Firebase
const DB_CONFIG = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DBURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDERID,
};

export default !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
