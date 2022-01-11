import React, { useEffect } from "react";
import Header from "../components/Header";
import "./custom.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsGalery from "../components/ProjectsGalery";
import AboutMe from "../components/AboutMe";
import Welcome from "../components/Welcome";
import TechCard from "../components/TechCard";
import { faReact, faNodeJs, faCss3, faHtml5, faNpm, faGithub } from '@fortawesome/free-brands-svg-icons'
import Contact from "../components/Contact";

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
          id="work"
          data-aos="flip-up"
          className="text-5xl mt-10 md:text-6xl lg:text-9xl text-right pr-10 font-bold text-custom-black-gray"
        >{`<projects>`}</p>
        <ProjectsGalery/>
        <p
          id="about"
          data-aos="slide-right"
          className="text-5xl md:text-6xl lg:text-9xl text-center pr-10 font-bold text-custom-black-gray"
        >{`<about me>`}</p>
        <AboutMe/>
    
        <div className="flex flex-wrap justify-center gap-4 mt-20 mb-20">
          <TechCard icon={faReact} title="React Js"/>
          <TechCard icon={faNodeJs} title="Node Js"/>
          <TechCard icon={faHtml5} title="HTML 5"/>
          <TechCard icon={faCss3} title="CSS 3"/>
          <TechCard icon={faNpm} title="NPM"/>
          <TechCard icon={faGithub} title="Github"/>
        </div>
      </div>
      <div className="backgroundContact">
        <Contact/>
        <p className="p-2 bg-custom-black text-custom-white text-center text-xs"> © Copyright 2021, all rights reserved.</p>
      </div>
    </>
  );
};

export default Home;
