import React from "react";
import homeImage from "../assets/svg/home-image.svg";
import homeImage2 from "../assets/svg/world-medium.svg";
const Welcome = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center custom-height p-5">
      <div>
        <h1 className="text-custom-white mb-10 mt-20 xl:mt-0 font-bold text-5xl max-w-3xl">
          Hi! I'm <span className="bg-custom-red rounded-md">Cristian</span> Web
          developer based in El Salvador.
        </h1>
        <p className="text-custom-white max-w-lg">
          Working in web development for a while now. I enjoy turning complex
          problems into simple, beutiful and intituive designs
        </p>
      </div>
      <img
        src={homeImage}
        alt="imagen-home"
        className="w-full mt-10 md:w-4/6 lg:w-3/6 xl:w-2/6"
      />
    </div>
  );
};

export default Welcome;
