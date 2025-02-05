import React from "react";
import NavBar from "../NavBar";

const Amina = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 py-8 px-6 min-h-screen font-poppins">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Amina's Smile
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Amina, a 32-year-old widow, lives in a small rural village with her
          two children, Farhan and Saba. The death of her husband left her
          struggling to provide for her family. Winter became her worst fear,
          as she had no means to buy warm clothes for herself or her children.
          Every night, they huddled together under a single thin blanket,
          hoping to make it through until sunrise.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          When Amina heard about our donation drive, she was hesitant to believe
          that someone would help her family. But on the day of distribution,
          she arrived and was greeted with warm smiles and a bundle of winter
          clothing. Amina received jackets, scarves, and gloves for her family.
          She hugged the items tightly, tears streaming down her face. "I
          thought we were forgotten, but today I feel like someone cared for
          us," she said.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Now, Amina’s children walk to school with bright scarves wrapped
          around their necks and gloves protecting their little hands. They no
          longer have to miss school because of the cold. At home, they laugh
          and play, their mother joining in with a smile that hadn’t been seen
          in years. Amina told us, "These clothes didn’t just warm our bodies;
          they warmed our hearts. I feel hopeful for the future."
        </p>
      </div>
    </div>
    </div>
  );
};

export default Amina;
