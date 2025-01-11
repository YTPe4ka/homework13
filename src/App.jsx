import React, { useState } from 'react';
import { useBookStore } from './store/store';
import BookCard from './components/BookCard';

const App = () => {
  const { books, addBook } = useBookStore();
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '' });

  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      addBook({ ...newBook, id: Date.now() });
      setNewBook({ title: '', author: '', description: '' });
    }
  };

  return (
    <div>
      <h1>Book Management</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
        ></textarea>
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;