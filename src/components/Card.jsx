import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { title, image, description, division } = data;

  return (
    <div className="p-4 bg-gray-200 rounded-3xl shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="w-full">
        <img 
          src={image} 
          alt="Shoes" 
          className="w-full h-56 lg:h-72 rounded-2xl" 
        />
      </div>
      <div className="flex flex-col gap-2 my-2">
        <h2 className="font-bold">{division}</h2>
        <h2 className="font-bold">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
        <Link to={`/donatedetails/${data.methodid}`} className="bg-gray-500 text-center text-white p-1 w-3/4 mx-auto rounded">
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default Card;
