import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../../features/Books/BooksSlice";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const books = useSelector((state) => state.booksReducer.books);
  // console.log(books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h2>All Books Here</h2>
      <div className="flex justify-center">
        <table>
          <thead>
            <tr className="bg-cyan-300 border border-b-black">
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Author</th>
              <th className="p-4">Action</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author } = book;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                      <Link to="/edit-book" state={{id, title, author}}>
                        <button>Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => handleDeleteBook(id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
