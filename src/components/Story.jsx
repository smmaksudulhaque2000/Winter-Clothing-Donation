import { Link } from "react-router-dom";
import story from "../assets/story.jpg";
import story2 from "../assets/story2.jpg";
import story3 from "../assets/story3jpeg.jpeg";
import Marquee from "react-fast-marquee";

const Story = () => {
  return (
    <div className="font-poppins">
      <section id="stories-of-impact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Stories of Impact</h2>
            <p className="text-gray-600 mt-4">Real stories of hope and warmth from our community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={story} alt="Story Image" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Rahim's Journey</h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                    Rahim, a street vendor, received warm clothing that helped him endure the harsh winter nights...
                  </p>
                </Marquee>
                <Link to="/rahim" className="text-blue-600 hover:underline mt-4 block">Read More</Link>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={story2} alt="Story Image" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Amina's Smile</h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                    Amina and her family were touched by the generosity of our donors, making their winter brighter...
                  </p>
                </Marquee>
                <Link to="/amina" className="text-blue-600 hover:underline mt-4 block">Read More</Link>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={story3} alt="Story Image" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">The Children's Warmth</h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                    Thanks to your donations, children in rural areas received jackets, scarves, and smiles...
                  </p>
                </Marquee>
                <Link to="/children" className="text-blue-600 hover:underline mt-4 block">Read More</Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/donationcampaigns"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
