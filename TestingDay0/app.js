const mongoose = require('mongoose');
const express = require('express');
const Book = require('./models/book'); // Ensure this matches your model export
const app = express();
const port = 4000;

app.use(express.json());

// MongoDB Atlas connection string with database name
const uri = 'mongodb+srv://Ammy:fQTVmKwHHobRK7fy@bookclusters.zcyrq.mongodb.net/booksDB?retryWrites=true&w=majority&appName=bookClusters';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB Atlas');
});

// Route to create a new book
app.post('/books', async (req, res) => {
  console.log('Request Body:', req.body); // Log request body
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    console.error('Error:', err); // Log error details
    res.status(400).json({ message: err.message });
  }
});


// Route to get all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a book by ID
app.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
