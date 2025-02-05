import React, { useEffect } from "react";
import profile from "../assets/profile.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import Aos from "aos";
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className="flex flex-col py-10 px-5 gap-8 bg-gray-300 ">
      <h3 className="text-3xl font-bold w-3/4 mx-auto text-center">
        About Us
      </h3>
      <p className="w-3/4 mx-auto text-center text-gray-500">
        We are a dedicated team committed to making winters bearable for those in need. Through your generous contributions, we collect and distribute winter clothing to ensure that no one has to face the cold alone. Together, we can create a warmer, kinder community where everyone feels cared for.
      </p>

      <div className="bg-gray-600 p-6 rounded-lg shadow-md w-3/4 mx-auto text-center">
        <h4 className="text-2xl font-semibold mb-3 text-gray-800">Our Mission</h4>
        <p className="text-gray-400">
          To ensure no one suffers through winter without proper clothing. We aim to unite communities to spread warmth and kindness.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-3/4 mx-auto">
        <div className="bg-gray-400 p-6 rounded-lg shadow-md text-center" data-aos="fade-left">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Step 1</h4>
          <p className="text-gray-600">Collect donations from various contributors.</p>
        </div>
        <div className="bg-gray-400 p-6 rounded-lg shadow-md text-center" data-aos="fade-down">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Step 2</h4>
          <p className="text-gray-600">Sort and package the donations for distribution.</p>
        </div>
        <div className="bg-gray-400 p-6 rounded-lg shadow-md text-center" data-aos="fade-right">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Step 3</h4>
          <p className="text-gray-600">Distribute donations to those in need.</p>
        </div>
      </div>

      <div className="w-4/4 mx-auto text-center">
        <h4 className="text-2xl font-semibold text-gray-800 mb-5">Meet Our Team</h4>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-white p-4 rounded-lg shadow-xl w-40 text-center">
            <img
              src={profile}
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-3"
            />
            <h5 className="text-lg font-medium text-gray-800">John Doe</h5>
            <p className="text-gray-600 text-sm">Founder</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-xl w-40 text-center">
            <img
              src={profile2}
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-3"
            />
            <h5 className="text-lg font-medium text-gray-800">Jane Smith</h5>
            <p className="text-gray-600 text-sm">Coordinator</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-xl w-40 text-center">
            <img
              src={profile3}
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-3"
            />
            <h5 className="text-lg font-medium text-gray-800">Emily Johnson</h5>
            <p className="text-gray-600 text-sm">Volunteer Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
