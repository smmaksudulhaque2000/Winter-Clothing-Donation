import About from "./About.JSX";
import Gallery from "./Gallery";
import Contribute from "./Contribute";
import Story from "./Story";
import Slide from "./Slide";

const Banner = () => {
  return (
    <div>
      <Slide />
      <About />
      <Contribute />
      <Gallery />
      <Story />
    </div>
  );
};

export default Banner;
