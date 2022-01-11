import React, { useEffect } from "react";
import Header from "../components/Header";
import "./custom.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsGalery from "../components/ProjectsGalery";
import AboutMe from "../components/AboutMe";
import Welcome from "../components/Welcome";

const Home = () => {
  useEffect(() => {
    AOS.init({duration: 3000});
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-custom-black to-custom-black-gray h-screen">
        <Header />
        <Welcome />
      </div>
      <div style={{overflowX: 'hidden'}} className="bg-custom-black-200 p-5">
        <p
          data-aos="flip-up"
          className="text-5xl md:text-6xl lg:text-9xl text-right pr-10 font-bold text-custom-black-gray mt-12"
        >{`<projects>`}</p>
        <ProjectsGalery/>
        <p
          data-aos="slide-right"
          className="text-5xl md:text-6xl lg:text-9xl text-center pr-10 font-bold text-custom-black-gray"
        >{`<about me>`}</p>
        <AboutMe/>
      </div>
    </>
  );
};

export default Home;
