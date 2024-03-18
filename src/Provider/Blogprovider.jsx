import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext(null);

const Blogprovider = ({ children }) => {
  const [allBlog, setAllBlog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blog = await axios.get("http://localhost:5000/all-blogs");
        setAllBlog(blog.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const blogInfo = { allBlog };
  return (
    <BlogContext.Provider value={allBlog}>{children}</BlogContext.Provider>
  );
};

export default Blogprovider;
