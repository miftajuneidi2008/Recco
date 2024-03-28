"use client";
import React from "react";
import { imagesComment } from "../data/data";
import Image from "next/image";

const Slide = () => {
  const [page, setPage] = React.useState(0);
  const ss = imagesComment.length - 1;
  const buttonHandler = () => {
    if (page === 0) {
      setPage(ss);
    }
    setPage((prev) => prev - 1);
  };
  const buttonHandler1 = () => {
    if (page === ss) {
      setPage(0);
    }
    setPage((prev) => prev + 1);
  };

  return (
    <div className="flex justify-between items-center py-6">
      <button onClick={() => buttonHandler()}> {"<"}</button>
      <div className="transition duration-500 ease-in-out">
        <div className="flex justify-center items-center pt-2">
          <Image
            src={imagesComment[page].img}
            width={70}
            height={70}
            alt={imagesComment[page].name}
            className="w-[70px] h-[70px] rounded-full"
          />
        </div>
        <p className="max-w-md text-[13px] text-center py-2">
          {imagesComment[page].comment}
        </p>
        <p className="text-center pt-2">Rating: 4/5</p>
        <p className="font-bold text-center py-2">{imagesComment[page].name}</p>
      </div>

      <button onClick={() => buttonHandler1()}> {">"}</button>
    </div>
  );
};

export default Slide;
