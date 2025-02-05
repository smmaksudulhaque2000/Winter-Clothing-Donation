import bitoron from "../assets/bitoron.jpeg";
import bitoron2 from "../assets/bitoron2.jpg";
import bitoron3 from "../assets/bacchara.jpg";
import bitoron4 from "../assets/bitoron4.jpeg";

const Slide = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img className="w-full h-[500px] opacity-50" src={bitoron4} />
        <div className="absolute w-full h-full flex flex-col justify-center items-center gap-10">
          <h3 className="animate__animated animate__backInDown font-bold text-4xl w-3/4 mx-auto text-center">
            Spread Warmth, Share Kindness
          </h3>
          <p className="animate__animated animate__backInUp font-bold text-gray-700 w-3/4 mx-auto text-center">
            Winter is here, and for many, it brings harsh challenges.
            Together, we can spread warmth and kindness to those in need.
            Donate your unused or gently worn winter clothing today and make a
            difference in someone's life. Every coat, scarf, or pair of gloves
            brings hope and comfort to those braving the cold. Join us in our
            mission to ensure no one is left out in the cold this winter!
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle opacity-70">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle opacity-70">
            ❯
          </a>
        </div>
      </div>
      
      <div id="slide2" className="carousel-item relative w-full">
        <img className="w-full h-[500px] opacity-50" src={bitoron3} />
        <div className="absolute w-full h-full flex flex-col justify-center items-center gap-10">
          <h3 className="animate__animated animate__backInDown font-bold text-4xl w-3/4 mx-auto text-center">
            Bring Warmth to Every Heart
          </h3>
          <p className="animate__animated animate__backInUp font-bold text-gray-700 w-3/4 mx-auto text-center">
            Your small act of kindness can bring big changes. Donate winter
            clothing today and help those in need to stay warm and safe during
            the harsh winter. Together, we can ensure that no one has to
            suffer in the cold.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle opacity-70">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle opacity-70">
            ❯
          </a>
        </div>
      </div>
      
      <div id="slide3" className="carousel-item relative w-full">
        <img className="w-full h-[500px] opacity-50" src={bitoron2} />
        <div className="absolute w-full h-full flex flex-col justify-center items-center gap-10">
          <h3 className="animate__animated animate__backInDown font-bold text-4xl w-3/4 mx-auto text-center">
            A Coat Can Change a Life
          </h3>
          <p className="animate__animated animate__backInUp font-bold text-gray-700 w-3/4 mx-auto text-center">
            A single coat can make a world of difference for someone in need.
            Join our winter clothing donation drive and help spread warmth to
            those battling the bitter cold. Your generosity can bring smiles
            and hope this winter.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle opacity-70">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle opacity-70">
            ❯
          </a>
        </div>
      </div>
      
      <div id="slide4" className="carousel-item relative w-full">
        <img className="w-full h-[500px] opacity-50" src={bitoron} />
        <div className="absolute w-full h-full flex flex-col justify-center items-center gap-10">
          <h3 className="animate__animated animate__backInDown font-bold text-4xl w-3/4 mx-auto text-center">
            Warm Hands, Warmer Hearts
          </h3>
          <p className="animate__animated animate__backInUp font-bold text-gray-700 w-3/4 mx-auto text-center">
            Winter doesn’t have to be unbearable for those in need. By
            donating your winter clothes, you can make a meaningful impact.
            Together, we can spread not just warmth, but also love and hope to
            our community.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle opacity-70">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle opacity-70">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
