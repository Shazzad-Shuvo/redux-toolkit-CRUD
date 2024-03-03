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
      // return [
      //   ...state,
      //   action.payload
      // ]

    }
  }
});

export const {showBooks, addBook} = booksSlice.actions;

export default booksSlice.reducer;
