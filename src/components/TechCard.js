import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-custom-white w-40 h-40 rounded-lg text-custom-red hover:bg-custom-red hover:text-custom-white cursor-pointer ease-in duration-200">
      <p className="text-5xl">
        <FontAwesomeIcon icon={icon} />
      </p>

      <h2 className="mt-2 font-bold">{title}</h2>
    </div>
  );
};

export default TechCard;
