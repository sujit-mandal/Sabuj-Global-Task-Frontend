import blogImageOne from "../assets/post 1.png";
import blogImageTwo from "../assets/post 2.png";
import StudentInfo from "../components/StudentInfo";
const BlogDetails = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-10">
      <div className="col-span-8 mt-20">
        <div>
          <h5 className="text-[#FF3D00] text-xl font-semibold">Design</h5>
          <h2 className="text-[40px] font-bold">
            3 Essential Design Trends, February 2024
          </h2>
          <p className="text-2xl">
            From atypical typefaces to neutral colors to unusual user patterns,
            there are plenty of new website design trends to try this month.
          </p>
          <div className="flex items-center gap-5 mt-2">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="size-16 rounded-full border-[6px] border-gray-300"
            />
            <div className="flex items-center gap-3 text-xl">
              <p>
                By <span className="font-bold">Carrie Cousins</span>
              </p>
              <p>March 12, 2024</p>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <img src={blogImageOne} alt="" className="w-full" />
          <p className="mt-8 text-2xl text-justify leading-relaxed">
            Spring into a new website design aesthetic with some of the hottest
            trends of the season. Some of the things we are seeing right now are
            unexpected twists and takes combined with classic design styles that
            result in interesting and unique site designs. Here’s what’s
            trending in design this month: 1. Atypical Typefaces Forget all the
            same old sans serifs! Designers are making bold choices with
            atypical typefaces that you don’t often see in website projects.
            What’s lovely about this trend is that it pays a sort of homage to
            print design, where interesting type styles are more of the norm.
            There’s no set rule for choosing a different typeface, it’s just
            ensuring that it works with the rest of your design and is readable
            on screens of all sizes. In this design trend, we are seeing all
            kinds of variations from handwriting styles to simple flair with
            what might otherwise be a standard sans serif. In order to make it
            work well, these typefaces are used for display purposes and almost
            always paired with a simple font for the main body copy. This helps
            ensure readability and comprehension for users. Parga uses a
            Greek-inspired typeface for its restaurant website design. The
            display is bold and interesting and helps support images that lack a
            ton of depth.
          </p>
          <img src={blogImageTwo} alt="" className="w-full" />

          <p className="mt-8 text-2xl text-justify leading-relaxed">
            Spring into a new website design aesthetic with some of the hottest
            trends of the season. Some of the things we are seeing right now are
            unexpected twists and takes combined with classic design styles that
            result in interesting and unique site designs. Here’s what’s
            trending in design this month: Conclusion: Spring into a new website
            design aesthetic with some of the hottest trends of the season. Some
            of the things we are seeing right now are unexpected twists and
            takes combined with classic design styles that result in interesting
            and unique site designs. Here’s what’s trending in design this
            month:
          </p>
        </div>
      </div>
      <div className="col-span-4 mt-20">
        <StudentInfo />
      </div>
    </div>
  );
};

export default BlogDetails;
