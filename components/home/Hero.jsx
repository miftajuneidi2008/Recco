import Image from "next/image";
import React from "react";
import img from '../../asset/image/food.png'
const Hero = () => {
  return (
    <div className="flex items-center py-4 max-container max-md:flex-col">
      <div className="w-3/6 flex flex-col max-md:w-[90%] mx-auto">
        <h2 >WIDE OPTIONS OF CHOICE</h2>
        <p className="text-4xl font-bold py-8">Delicious Recipes</p>
        <p className="max-w-xl text-gray-500 pb-10 leading-relaxed">
          Inappropriate behavior is often laughed off as “boys will be boys,”
          women face higher conduct standards especially in the workplace.
          That’s why it’s crucial that, as women.
        </p>
        <div className="my-3 max-md:pb-3">
        <button className="button">ChECK OUR MENU</button>
        </div>
      </div>
      <div className="w-3/6 max-md:w-[90%] mx-auto">
        <Image src={img} width={700} height={700} alt="Food" className="bg-center"/>
      </div>
    </div>
  );
};

export default Hero;
