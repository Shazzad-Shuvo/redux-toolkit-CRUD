import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      id: 1,
      title: "Harry Potter",
      author: "JK Rowling",
    },
    {
      id: 2,
      title: "Harry Potter2",
      author: "JK Rowling",
    },
    {
      id: 3,
      title: "Harry Potter3",
      author: "JK Rowling",
    },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id != id);
    },
    editBook: (state, action) => {
      const {id, title, author} = action.payload;
      const isBookExist = state.books.filter((book) => book.id == id);
      console.log(isBookExist);
      if(isBookExist){
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    }
  }
});

export const {showBooks, addBook, deleteBook, editBook} = booksSlice.actions;

export default booksSlice.reducer;
