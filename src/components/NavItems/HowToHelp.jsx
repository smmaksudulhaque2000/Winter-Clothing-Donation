import { Link } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";

const HowToHelp = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-poppins">
      <NavBar />
      <div className="max-w-4xl mx-auto p-8">
        <h3 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">
          How to Help
        </h3>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Your kindness can bring warmth and hope to others. Here’s how you can
          help:
        </p>
        <div className="bg-white p-8 rounded-xl shadow-xl space-y-8">
          <ul className="space-y-6">
            <li className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                1
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Donate Winter Clothing
                </h4>
                <p className="text-gray-600 text-lg">
                  You can donate gently used or new winter clothing such as
                  jackets, sweaters, gloves, hats, and scarves to help those in
                  need.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                2
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Monetary Donations
                </h4>
                <p className="text-gray-600 text-lg">
                  Financial contributions help us purchase necessary items for
                  donation campaigns. Your donation makes a big difference!
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                3
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Spread Awareness
                </h4>
                <p className="text-gray-600 text-lg">
                  Share our campaign on social media and encourage your friends
                  and family to participate in the initiative.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                4
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Volunteer
                </h4>
                <p className="text-gray-600 text-lg">
                  Sign up to help distribute clothing, assist with events, or
                  support in other ways at our local donation centers.
                </p>
              </div>
            </li>
          </ul>
          <p className="text-lg text-gray-700 mt-6 text-center">
            If you're ready to get started, check out our{" "}
            <Link
              to="/donationcampaigns"
              className="text-blue-600 font-semibold hover:underline"
            >
              Donation Campaigns
            </Link>{" "}
            page for more details on how you can get involved.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowToHelp;
