// js/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyBQ7qa44-jAufeNJepRmLfOgCluZAUutic",
  authDomain: "ujian-online-e37f8.firebaseapp.com",
  databaseURL: "https://ujian-online-e37f8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ujian-online-e37f8",
  storageBucket: "ujian-online-e37f8.firebasestorage.app",
  messagingSenderId: "588456104713",
  appId: "1:588456104713:web:a49e73fe00ef01e6a6b9d8",
  measurementId: "G-Z8FSQQ069Q"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
