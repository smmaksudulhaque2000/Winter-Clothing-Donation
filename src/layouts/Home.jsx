import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className="font-poppins">
      <NavBar />
      <Outlet />
      <Marquee>
        <h3 className="my-5 font-bold text-gray-600 text-xl">
          Spread Warmth, Share Smiles: Donate Winter Clothes and Bring Comfort
          to Those in Need. Join Us in Making This Winter a Little Brighter for
          Everyone!
        </h3>
      </Marquee>
      <Footer />
    </div>
  );
};

export default Home;
