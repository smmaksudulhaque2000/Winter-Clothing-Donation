import { useEffect } from "react";
import gallery from "../assets/gallery.avif";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.avif";
import gallery3 from "../assets/gallery3.avif";
import gallery4 from "../assets/gallery4.webp";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'

const Gallery = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div className="py-20">
            <div>
                <h3 className="text-3xl font-bold text-center my-5">Sharing Smiles in Winter</h3>
                <p className="w-3/4 mx-auto text-center text-gray-600 py-5">
                    Experience the warmth of giving through our shared moments of joy! 'Sharing Smiles in Winter' captures the beautiful connections formed when kindness and compassion meet. Each photograph tells a story of hope, love, and the power of community. Together, we spread smiles and create memories that last beyond the winter season.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20">
                <img className="w-full h-64 shadow-xl rounded" src={gallery} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery1} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery2} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery3} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery4} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery5} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery6} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery7} alt="Image" data-aos="zoom-in-up"/>
            </div>
        </div>
    );
};

export default Gallery;
