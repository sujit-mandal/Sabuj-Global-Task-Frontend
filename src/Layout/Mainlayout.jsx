import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
const Mainlayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Mainlayout;
