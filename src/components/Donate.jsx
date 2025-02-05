import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";

const Donate = () => {
    const fakeData = useLoaderData();   
    const [visibleCards, setVisibleCards] = useState(6);
    const [selectedDivision, setSelectedDivision] = useState("All");

    const filteredData = selectedDivision === "All" 
        ? fakeData 
        : fakeData.filter(data => data.division === selectedDivision);

    const handleShowMore = () => {
        setVisibleCards(filteredData.length);
    };

    const divisions = ["All", ...new Set(fakeData.map(data => data.division))];

    return (
        <div className="w-3/4 mx-auto my-10">
            <div className="flex flex-col justify-center items-center gap-5 lg:py-5">
                <h3 className="text-3xl font-bold lg:w-3/4 mx-auto text-center">
                    Give People Physical and Emotional Warmth By donating clothes to the homeless
                </h3>
                <p className="lg:w-3/4 mx-auto text-center text-gray-500">
                    Share warmth, and donate gently used winter clothing. Help those in need stay cozy during the cold months. Make a difference by joining the best charity to donate clothes.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 my-5">
                {divisions.map((division, index) => (
                    <button 
                        key={index}
                        onClick={() => {
                            setSelectedDivision(division);
                            setVisibleCards(6);
                        }}
                        className={`px-4 py-2 rounded-lg text-white text-xs font-bold ${
                            selectedDivision === division ? "bg-gray-700" : "bg-gray-400"
                        }`}
                    >
                        {division}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
                {filteredData.slice(0, visibleCards).map(data => (
                    <Card key={data.methodid} data={data}></Card>
                ))}
            </div>

            {visibleCards < filteredData.length && (
                <div className="flex justify-center mt-5">
                    <button 
                        onClick={handleShowMore} 
                        className="bg-gray-400 p-2 rounded w-full font-bold text-xl">
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Donate;