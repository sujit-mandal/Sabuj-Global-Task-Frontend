import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import StudentInfo from "../components/StudentInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import Homebutton from "../components/Homebutton";
const BlogDetails = () => {
  const params = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://server-lilac-five.vercel.app/blog-details/${params.id}`
        );
        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  console.log(blog);
  return (
    <div className="max-w-screen-xl mx-auto mt-52">
      <Homebutton />
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8 mt-5">
          <div>
            <h5 className="text-[#FF3D00] text-xl font-semibold">
              {blog?.category}
            </h5>
            <h2 className="text-[40px] font-bold">{blog?.title}</h2>
            <p className="text-2xl">{blog?.shortDescription}</p>
            <div className="flex items-center gap-5 mt-2">
              <img
                src={blog?.userImage}
                alt=""
                className="size-16 rounded-full border-[6px] border-gray-300"
              />
              <div className="flex items-center gap-3 text-xl">
                <p>
                  By <span className="font-bold">{blog?.userName}</span>
                </p>
                <p>{blog?.postedDate}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-6">
            <img src={blog?.firstImage} alt="" className="w-full" />
            <p className="mt-8 text-2xl text-justify leading-relaxed">
              {blog?.firstLongDescription}
            </p>
            <img src={blog?.secondImage} alt="" className="w-full" />

            <p className="mt-8 text-2xl text-justify leading-relaxed">
              {blog?.secondLongDescription}
            </p>
          </div>
        </div>
        <div className="col-span-4 mt-5">
          <StudentInfo />
        </div>
      </div>
      <div className="mt-10">
        <Pagination />
      </div>
    </div>
  );
};

export default BlogDetails;
