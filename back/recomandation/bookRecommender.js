// const axios = require('axios');
// const Book = require("../model/book");// Assurez-vous que ce chemin est correct

// class BookRecommender {
//   constructor() {
//     this.apiUrl = 'http://127.0.0.1:5000/predict'; // URL de l'API Flask
//   }

//   async recommend(bookTitle) {
//     try {
//       const books = await Book.find(); // Récupère tous les livres de MongoDB
//       const booksData = books.map(book => ({
//         title: book.name.replace(" ", ""),
//         author: book.author.replace(" ", ""),
//         publisher: book.post.replace(" ", ""),
//       }));

//       const response = await axios.post(this.apiUrl, {
//         book_title: bookTitle.replace(" ", ""),
//         books_data: booksData
//       });

//       return response.data.recommendations;
//     } catch (error) {
//       throw new Error(`Error fetching recommendations: ${error.message}`);
//     }
//   }
// }

// module.exports = BookRecommender;
