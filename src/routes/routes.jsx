import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllBooks from "../pages/Books/AllBooks/AllBooks";
import AddBook from "../pages/Books/AddBook/AddBook";
import EditBooks from "../pages/Books/EditBooks/EditBooks";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "show-books",
                element: <AllBooks></AllBooks>
            },
            {
                path: "add-book",
                element: <AddBook></AddBook>
            },
            {
                path: "edit-book",
                element: <EditBooks></EditBooks>
            },
        ]
    }
])