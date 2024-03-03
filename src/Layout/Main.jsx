import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
