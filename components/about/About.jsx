import Image from "next/image";
import React from "react";
import ab from '../../asset/image/ab.png'
const About = () => {
  return (
    <div className="flex gap-2 flex-row-reverse md:py-20 max-container max-md:flex-col">
      <div className="w-3/6 max-md:w-[90%] max-md:mx-auto">
        <h2 className="text-3xl font-bold pb-4">About US</h2> 
        <p className="text-gray-600 max-w-xl leading-relaxed">
          Who are in extremely love with eco friendly system. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <div className="my-8">
        <button className="button">VIEW FULL MENU </button>
        </div>
      </div>
      <div className="w-3/6 max-md:w-[90%] max-md:mx-auto mb-2">
        <Image src={ab} width={600} height={700} alt="About"/>
      </div>
    </div>
  );
};

export default About;
