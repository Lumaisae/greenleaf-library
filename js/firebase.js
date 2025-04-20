// Initialize Firebase (you'll need to replace these values with your own Firebase project config)
const firebaseConfig = {
  apiKey: "AIzaSyDToA9Zmb3KQCwgKj8DFDkpfRr3d8o6Pi4",
  authDomain: "greenleaf-library.firebaseapp.com",
  projectId: "greenleaf-library",
  storageBucket: "greenleaf-library.firebasestorage.app",
  messagingSenderId: "440551178140",
  appId: "1:440551178140:web:cb72b904cb2a33dca69259",
  measurementId: "G-7NT60V38XP",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const booksCollection = db.collection("books");
const commentsCollection = db.collection("comments");
