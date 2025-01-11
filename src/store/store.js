import { create } from 'zustand';

export const useBookStore = create((set) => ({
  books: [],
  addBook: (book) => set((state) => ({ books: [...state.books, book] })),
  editBook: (id, updatedBook) => set((state) => ({
    books: state.books.map((book) => (book.id === id ? { ...book, ...updatedBook } : book)),
  })),
  deleteBook: (id) => set((state) => ({
    books: state.books.filter((book) => book.id !== id),
  })),
}));
