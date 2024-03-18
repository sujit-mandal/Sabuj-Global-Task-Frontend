import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Homebutton from "../components/Homebutton";

const Blogpage = () => {
  const location = useLocation();
  const filteredBlogs = location.state?.filteredBlogs;
  console.log(filteredBlogs);
  return (
    <div className="max-w-screen-xl mx-auto mt-52">
      <Homebutton />
      <h3 className="text-3xl font-semibold mt-5">New blog for you</h3>
      <div className="my-10 grid grid-cols-4 gap-5">
        {filteredBlogs?.slice().map((blog) => (
          <Card key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogpage;
