import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const Blogpage = () => {
  const location = useLocation();
  const filteredBlogs = location.state?.filteredBlogs;
  console.log(filteredBlogs);
  return (
    <div className="max-w-screen-xl mx-auto mt-32">
      <h3 className="text-3xl font-semibold">New blog for you</h3>
      <div className="mt-10 grid grid-cols-4 gap-5">
        {filteredBlogs?.slice().map((blog) => (
          <Card key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogpage;
