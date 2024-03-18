import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import * as XLSX from "xlsx";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { BlogContext } from "../Provider/Blogprovider";
import Lottie from "lottie-react";
import Download from "../Download.json";
const Home = () => {
  const allBlog = useContext(BlogContext);
  const [showBlog, setShowBlog] = useState([]);
  const [allStudentInfo, setAllStudentInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentInfo = await axios.get(
          "http://localhost:5000/all-students"
        );
        setAllStudentInfo(studentInfo.data);
        const blog = await axios.get("http://localhost:5000/all-blogs");
        setShowBlog(blog.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleClick = () => {
    setShowBlog(allBlog);
  };

  const handleDownload = () => {
    if (!allStudentInfo.length) {
      alert("There is no data to export.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(allStudentInfo);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Student Data");

    XLSX.writeFile(workbook, "Student_Info.xlsx"); // Filename customization
  };
  return (
    <div className="font-Inter">
      <Navbar allBlog={allBlog} />
      <Hero />
      <div className="max-w-screen-xl mx-auto my-10">
        <div className="pr-5 flex items-center justify-between">
          <h3 className="text-3xl font-semibold">New blog for you</h3>
          <button
            className="text-xl font-medium text-[#F0672B]"
            onClick={handleClick}
          >
            View all blog ->
          </button>
        </div>
        <div className="mt-10 grid grid-cols-4 gap-5">
          {showBlog?.slice().map((blog) => (
            <Card key={blog._id} blog={blog} />
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-10 my-10">
        <h1 className="text-4xl font-bold">Click Download to get Student Information as Excel Sheet</h1>
        <button onClick={handleDownload}>
          <Lottie animationData={Download} />
        </button>
      </div>
    </div>
  );
};

export default Home;
