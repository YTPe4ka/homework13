import React, { useState } from 'react';
import { useBookStore } from '../store/store';

const BookCard = ({ book }) => {
  const { editBook, deleteBook } = useBookStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState(book);

  const handleSave = () => {
    editBook(book.id, editedBook);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedBook.title}
            onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
          />
          <input
            type="text"
            value={editedBook.author}
            onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
          />
          <textarea
            value={editedBook.description}
            onChange={(e) => setEditedBook({ ...editedBook, description: e.target.value })}
          ></textarea>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
