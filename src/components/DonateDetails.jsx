import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar";

const DonateDetails = () => {
  const fakeData = useLoaderData();
  const { methodid } = useParams();
  const selectedData = fakeData.find(
    (item) => item.methodid.toString() === methodid
  );

  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    additionalNotes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Thank you! We will reach your destination soon");
    setFormData({
      quantity: "",
      itemType: "",
      pickupLocation: "",
      additionalNotes: "",
    });
  };

  return (
    <div className="font-poppins">
      <NavBar></NavBar>
      <div className="bg-gray-300 flex flex-col lg:flex-row lg:min-h-screen lg:py-40">
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <h3 className="text-3xl text-gray-600 font-bold my-5">{selectedData.title}</h3>
          <img
            className="w-3/4 rounded-xl my-5"
            src={selectedData.image}
            alt={selectedData.title}
          />
          <div>
            <p className="font-bold">Division: {selectedData.division}</p>
            <p className="font-bold text-gray-500">{selectedData.description}</p>
            <p className="font-bold text-gray-500">Contact: {selectedData.contactInfo}</p>
            <p className="font-bold text-gray-500">Status: {selectedData.status}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-3/4 lg:w-1/2 mx-auto my-5 lg:my-0"
        >
          <h4 className="text-2xl font-bold mb-6 text-center">Donate Items</h4>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-bold">Quantity of Items</span>
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="e.g., 2 jackets, 3 blankets"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-bold">Item Type</span>
            </label>
            <input
              type="text"
              name="itemType"
              value={formData.itemType}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="e.g., Blanket, Jacket, Sweater"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-bold">Pickup Location</span>
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-bold">Additional Notes (Optional)</span>
            </label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              placeholder="Add any additional notes"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-gray-500 text-white hover:bg-gray-600">
              Submit Donation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateDetails;
