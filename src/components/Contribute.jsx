import find from "../assets/find.png";
import form from "../assets/form.jpg";
import confirm from "../assets/confirm.jpg";
import { FaMapLocationDot } from "react-icons/fa6";

const Contribute = () => {
  return (
    <div>
      <section id="how-it-works" className="bg-gray-100 py-10 px-5 font-sans">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
          How It Works
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Donate winter clothing in just 3 simple steps and bring warmth to those in need.
        </p>
        <div className="flex flex-wrap justify-around gap-6">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center hover:transform hover:translate-y-[-10px] transition-transform">
            <img src={find} alt="Find Camp Icon" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Find a Camp</h3>
            <p className="text-gray-600">Select a donation camp near you and view the details.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg text-center hover:transform hover:translate-y-[-10px] transition-transform">
            <img src={form} alt="Fill Form Icon" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Fill the Form</h3>
            <p className="text-gray-600">Provide the necessary details about your donation.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg text-center hover:transform hover:translate-y-[-10px] transition-transform">
            <img
              src={confirm}
              alt="Confirm Donation Icon"
              className="w-12 h-12 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Confirm Donation</h3>
            <p className="text-gray-600">Submit your information and receive a confirmation message.</p>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 w-3/4 mx-auto gap-5 my-10'>
          <h3 className='text-xl flex items-center gap-2'><FaMapLocationDot />Dhaka</h3>
          <h3 className='text-xl flex items-center gap-2'><FaMapLocationDot />Chattogram</h3>
          <h3 className='text-xl flex items-center gap-2'><FaMapLocationDot />Rajshahi</h3>
          <h3 className='text-xl flex items-center gap-2'><FaMapLocationDot />Khulna</h3>
          <h3 className='text-xl flex items-center gap-2'><FaMapLocationDot />Barishal</h3>
          <h3 className='text-xl flex items-center gap-2'><FaMapLocationDot />Sylhet</h3>
          <h3 className='text-xl flex items-center gap-2'><FaMapLocationDot />Rangpur</h3>
          <h3 className='text-xl flex items-center gap-2'><FaMapLocationDot />Mymensingh</h3>
        </div>
      </section>
    </div>
  );
};

export default Contribute;
