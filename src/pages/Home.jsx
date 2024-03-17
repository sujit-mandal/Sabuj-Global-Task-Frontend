import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import * as XLSX from "xlsx";
import Hero from "../components/Hero";
import Card from "../components/Card";
const Home = () => {
  const [allBlog, setAllBlog] = useState([]);
  const [allStudentInfo, setAllStudentInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentInfo = await axios.get(
          "http://localhost:5000/all-students"
        );
        setAllStudentInfo(studentInfo.data);
        const blog = await axios.get("http://localhost:5000/all-blogs");
        setAllBlog(blog.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(allBlog);

  const handleDownload = () => {
    if (!allStudentInfo.length) {
      alert("There is no data to export.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(allBlog);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Student Data");

    XLSX.writeFile(workbook, "Student_Info.xlsx"); // Filename customization
  };
  return (
    <div className="font-Inter">
      <Navbar allBlog={allBlog} />
      <Hero />
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-5">
        {allBlog?.slice().map(blog=> <Card key={blog._id} blog={blog} />)}
      </div>
      {/* <BlogDetails allBlog={allBlog} /> */}
      {/* <button onClick={handleDownload} className="bg-green-500 px-3 py-2 rounded-lg mb-10">Download</button> */}
    </div>
  );
};

export default Home;
