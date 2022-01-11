import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import pdfFile from '../assets/pdf/cmundo.pdf'
const AboutMe = () => {

  return (
    <div className="flex flex-col xl:flex-row p-5 max-w-7xl mx-auto justify-around mt-20">
      <div data-aos="slide-right" className="mb-10 xl:mb-0">
        <h2 className="text-custom-white font-bold text-5xl mb-5">
          My <br />
          story
        </h2>
        <a href={pdfFile} download className="text-custom-white cursor-pointer"><FontAwesomeIcon className="text-custom-red" icon={faArrowAltCircleDown}/> Download CV</a>
      </div>
      <p data-aos="slide-left" className="text-custom-white max-w-4xl">
        Hi, my story begins 5 years ago when I started to study informatic
        engeneering, that was my dream since i was a child at the beginning it
        was kind of hard but with time I was learning a lot every day, then i
        saw my potential in the web industry i liked how things work and how all
        is attatch (backend - frontend) to finally get a product out to
        production. <br />I consider myself someone who is very responsible,
        proactive and professional with its work and i always care about how the
        final product is.
      </p>
    </div>
  );
};

export default AboutMe;
