import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHuW3LU9TUlYl4wfSvILZDjclVNWFU820",
  authDomain: "fireblog-da183.firebaseapp.com",
  projectId: "fireblog-da183",
  storageBucket: "fireblog-da183.appspot.com",
  messagingSenderId: "427727967045",
  appId: "1:427727967045:web:eb1cdeeb57fc79fc3da42c",
};

const firebaseApp = firebase.initializeapp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };

export default firebaseApp.firestore();
