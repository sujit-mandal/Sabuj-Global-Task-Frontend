import Navbar from "../components/Navbar";
import Topnav from "../components/Topnav";


const Home = () => {
    return (
        <div className="font-Inter">
            <Topnav/>
            <Navbar/>
            {/* <Multilevelnav/> */}
            <h1 className="text-red-500 text-5xl">This is Homepage</h1>
        </div>
    );
};

export default Home;