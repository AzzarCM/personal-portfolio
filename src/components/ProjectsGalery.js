import React from "react";
import Canvas from "../assets/pictures/canvas.png";
import Faf from "../assets/pictures/faf.png";
import Salesianos from "../assets/pictures/salesianos.png";
const ProjectsGalery = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="flex flex-col lg:flex-row m-20 max-w-4xl mx-auto gap-2"
    >
      <div>
        <a href="https://canvasframeit.com/main/home" target="_blank">
          <img
            src={Canvas}
            className="h-full object-cover rounded-lg hover:scale-90 cursor-pointer ease-in duration-200"
            alt="canvas"
          />
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <a href="https://salesianos.netlify.app/home"  target="_blank">
          <img
            src={Salesianos}
            className="rounded-lg hover:scale-90 cursor-pointer ease-in duration-200"
            alt="salesianos"
          />
        </a>
        <a href="https://www.feedafriendapp.org/"  target="_blank">
          <img
            src={Faf}
            className="rounded-lg hover:scale-90 cursor-pointer ease-in duration-200"
            alt="feed-a-friend"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectsGalery;
