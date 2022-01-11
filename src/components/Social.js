import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = ({ icon, link }) => {
  return (
    <a href={link} target="_blank"  rel="noreferrer" className='rounded-full bg-custom-white w-16 h-16 flex justify-center items-center text-2xl hover:bg-custom-red hover:text-custom-white cursor-pointer ease-in duration-100'>
      <FontAwesomeIcon icon={icon}/>
    </a>
  )
}

export default Socials
