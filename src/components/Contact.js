import React from "react";
import Socials from "./Social";
import { faLinkedinIn, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const submitAction = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col xl:flex-row p-5 justify-evenly bg-black opacity-90 items-center pt-20 pb-20">
      <div className="flex flex-col">
        <h2 id="contact" className="text-5xl font-bold text-white text-center xl:text-left">
          Hire Me <br /> For The Next Projects.
        </h2>
        <p className="mt-10 text-white text-center xl:text-left">Drop Your Details Here.</p>
        <div className="flex flex-wrap justify-center xl:justify-start gap-2 mt-10">
          <Socials icon={faLinkedinIn} link="https://www.linkedin.com/in/cristian-mundo-833797212/" /> 
          <Socials icon={faGithub} link="https://github.com/AzzarCM" />
          <Socials icon={faInstagram} link="https://www.instagram.com/crismundo_"/>
        </div>
      </div>
      <form
        onSubmit={submitAction}
        className="flex flex-col border-l-8 border-custom-red bg-white w-full max-w-2xl p-10 pt-20 pb-20 mt-10"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>
        <label className="text-custom-light-gray font-bold">Full Name</label>
        <input
          className="text-custom-black-gray border-b-2 border-custom-red focus:outline-0"
          type="text"
        ></input>
        <label className="text-custom-light-gray font-bold mt-10 ">Email</label>
        <input
          className="text-custom-black-gray border-b-2 border-custom-red focus:outline-0"
          type="email"
        ></input>
        <label className="text-custom-light-gray font-bold mt-10 ">Phone</label>
        <input
          className="text-custom-black-gray border-b-2 border-custom-red focus:outline-0"
          type="tel"
        ></input>
        <label className="text-custom-light-gray font-bold mt-10 ">
          Comment
        </label>
        <textarea
          className="text-custom-black-gray border-b-2 border-custom-red focus:outline-0"
          type="text"
        ></textarea>
        <button
          className="bg-custom-red w-40 h-12 text-custom-white mt-10 rounded-md mx-auto hover:border-2 hover:border-custom-red hover:bg-custom-white hover:text-custom-black"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
