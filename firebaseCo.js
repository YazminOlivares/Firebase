// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getFirestore  } = require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlsaH261LGvgyNHMJ4z66wCiFp5dBpqqg",
  authDomain: "projectfirebase-8c64b.firebaseapp.com",
  projectId: "projectfirebase-8c64b",
  storageBucket: "projectfirebase-8c64b.appspot.com",
  messagingSenderId: "1020977343272",
  appId: "1:1020977343272:web:6f42e4bdfdd93a02b23e1d",
  measurementId: "G-C5YXK31XLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;