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
// const db = firebase.firestore();
// const booksCollection = db.collection("books");

// Your app code adapted for Firebase
// document.addEventListener("DOMContentLoaded", function () {
//   // DOM Elements (same as before)

//   // Books array
//   let books = [];
//   let isEditing = false;

//   // Function to load books from Firestore
//   function loadBooks() {
//     booksCollection
//       .get()
//       .then((snapshot) => {
//         books = [];
//         snapshot.forEach((doc) => {
//           books.push({
//             id: doc.id,
//             ...doc.data(),
//           });
//         });
//         // displayBooks(books);
//       })
//       .catch((error) => {
//         console.error("Error loading books: ", error);
//         showStatus("Error loading books", false);
//       });
//   }

//   // Function to add a new book
//   function addBook(book) {
//     booksCollection
//       .add(book)
//       .then(() => {
//         loadBooks();
//         showStatus("Book added successfully!", true);
//       })
//       .catch((error) => {
//         console.error("Error adding book: ", error);
//         showStatus("Error adding book", false);
//       });
//   }

//   // Function to update a book
//   function updateBook(id, book) {
//     booksCollection
//       .doc(id)
//       .update(book)
//       .then(() => {
//         loadBooks();
//         showStatus("Book updated successfully!", true);
//       })
//       .catch((error) => {
//         console.error("Error updating book: ", error);
//         showStatus("Error updating book", false);
//       });
//   }

//   // Function to delete a book
//   function deleteBook(id) {
//     booksCollection
//       .doc(id)
//       .delete()
//       .then(() => {
//         loadBooks();
//         showStatus("Book deleted successfully!", true);
//       })
//       .catch((error) => {
//         console.error("Error deleting book: ", error);
//         showStatus("Error deleting book", false);
//       });
//   }

//   // Handle form submission
//   function handleFormSubmit(e) {
//     e.preventDefault();

//     const title = titleInput.value.trim();
//     const author = authorInput.value.trim();
//     const genre = genreInput.value;
//     const description = descriptionInput.value.trim();

//     if (!title || !author || !genre || !description) {
//       showStatus("Please fill in all fields", false);
//       return;
//     }

//     const book = {
//       title,
//       author,
//       genre,
//       description,
//     };

//     if (isEditing) {
//       // Update existing book
//       const bookId = bookIdInput.value;
//       updateBook(bookId, book);
//     } else {
//       // Add new book
//       addBook(book);
//     }

//     resetForm();
//   }

//   // Function to display books
//   //   function displayBooks(books) {
//   //     const booksGrid = document.getElementById("booksGrid");
//   //     booksGrid.innerHTML = books
//   //       .map(
//   //         (book) => `
//   //         <div class="book-card">
//   //             <div class="book-cover" onclick="window.location.href='book.html?id=${
//   //               book.id
//   //             }'"
//   //                  style="background-image: url('${
//   //                    book.cover ||
//   //                    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000"
//   //                  }')">
//   //             </div>
//   //             <div class="book-info">
//   //                 <div class="book-title">${book.title}</div>
//   //                 <div class="book-author">By ${
//   //                   book.author || "Unknown Author"
//   //                 }</div>
//   //             </div>
//   //         </div>
//   //     `
//   //       )
//   //       .join("");
//   //   }

//   // Other functions (displayBooks, resetForm, handleEdit, handleDelete, etc.) remain mostly the same

//   // Initialize the app
//   loadBooks();
// });
