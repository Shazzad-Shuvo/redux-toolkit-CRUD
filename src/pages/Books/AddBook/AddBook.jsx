import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../../features/Books/BooksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const numOfBooks = useSelector((state) => state.booksReducer.books.length);
    // console.log(numOfBooks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numOfBooks + 1, title, author };
    console.log(book);
    dispatch(addBook(book));
    navigate('/show-books', {replace: true});
  };

  return (
    <div>
      <h2>Add New Books</h2>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="space-x-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-100 border-2 border-gray-200 rounded-md"
            required
          />
        </div>
        <div className="space-x-4">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="bg-gray-100 border-2 border-gray-200 rounded-md"
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
