import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "../../../features/Books/BooksSlice";

const EditBooks = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);


  const handleEdit = (e) =>{
    e.preventDefault();
    dispatch(editBook({id, title, author}));
    navigate('/show-books', {replace: true})
  }

  return (
    <div>
      <h2>Edit books here of id: {title}</h2>
      <form className="mt-8" onSubmit={handleEdit}>
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
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBooks;
