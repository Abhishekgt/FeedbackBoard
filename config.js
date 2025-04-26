// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// If you need database functions, import them as well:
// import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOAbNCi96oawfgmXC95gaUZlTjtMWVeYM",
  authDomain: "feedback-90c7f.firebaseapp.com",
  databaseURL: "https://feedback-90c7f-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "feedback-90c7f",
  storageBucket: "feedback-90c7f.appspot.com",
  messagingSenderId: "390324114710",
  appId: "1:390324114710:web:08198a8ccc9c173f90ac37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// If you need to use the database, uncomment below:
// const database = getDatabase(app);

export { app /*, database*/ };
