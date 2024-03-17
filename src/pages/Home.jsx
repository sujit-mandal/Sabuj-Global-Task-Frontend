import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";
import BlogDetails from "./BlogDetails";

const Home = () => {
  return (
    <div className="font-Inter">
      <Topnav />
      <Navbar />
      <BlogDetails />
    </div>
  );
};

export default Home;
