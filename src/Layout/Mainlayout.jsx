import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
const Mainlayout = () => {
  return (
    <div>
      <Toaster/>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
