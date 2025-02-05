import React from "react";
import NavBar from "../NavBar";

const MoreStories = () => (
  <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">More Stories of Impact</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-3">
      <li>
        <strong>Amina's Smile:</strong> A widow who struggled to keep her family warm during winter, now has hope thanks to generous donors who provided warm clothing for her and her children.
      </li>
      <li>
        <strong>The Children's Warmth:</strong> In a remote village, children received jackets and scarves, allowing them to play and attend school during the harsh winter.
      </li>
      <li>
        <strong>Salma's Gratitude:</strong> A single mother of three, Salma now faces winter with a renewed sense of optimism after receiving winter clothes for her entire family.
      </li>
    </ul>
  </div>
);

const Rahim = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 py-8 px-6 min-h-screen font-poppins">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rahim's Journey</h3>
        <p className="text-gray-600 leading-relaxed">
          Rahim, a 48-year-old street vendor, has spent most of his life selling fruits by the roadside. During the harsh winters, his struggles doubled as he worked long hours in the cold to earn enough to feed his family. Every night, he would wrap himself in a thin, worn-out shawl, wishing for something warmer. Despite his hardships, Rahim's determination never wavered.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          One day, through our winter clothing donation campaign, Rahim received a thick jacket, a pair of gloves, and a woolen hat. As he put on the jacket, his eyes welled up with tears of gratitude. "For the first time in years, I feel the warmth of both clothing and kindness," he said with a trembling voice.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          The impact went beyond just warmth. With the new clothing, Rahim could work more comfortably, his energy renewed by not having to endure the biting cold. His sales increased, and he started saving small amounts for his children's education. "You didn’t just give me clothes; you gave me hope to dream again," Rahim shared. His story is a reminder of how even small acts of kindness can change lives in unimaginable ways.
        </p>
      </div>
      <MoreStories />
    </div>
    </div>
  );
};

export default Rahim;
