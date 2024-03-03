import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="text-center space-x-4 py-4 bg-emerald-500 font-semibold">
                <Link to="/" className="hover:text-yellow-100">Home</Link>
                <Link to="/show-books" className="hover:text-yellow-100">Show Books</Link>
                <Link to="/add-book" className="hover:text-yellow-100">Add Book</Link>
            </nav>
        </div>
    );
};

export default Navbar;