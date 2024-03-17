const BlogCard = ({ blog }) => {
  return (
    <div>
      <img src={blog?.firstImage} alt="card-image" className="w-full h-52 object-cover rounded-2xl"/>
      <h2 className="text-2xl font-bold mt-10">{blog?.title}</h2>
      <p className="text-xl mt-5">{blog?.shortDescription.slice(0, 145)} ...</p>
      <p className="text-xl mt-5">By {blog?.userName}</p>
    </div>
  );
};

export default BlogCard;
