"use client"
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { imagesComment } from "../data/data";
import Image from "next/image";
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};


const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Comments = () => {
  const [[page, direction], setPage] = useState([0,0]);
  

  const imageIndex = wrap(0, imagesComment.length, page);

  const paginate = (newDirection) => {
    
    setPage([page + newDirection, newDirection]);
    console.log(page)
  };

  return (
    <>
      <AnimatePresence initial={true} custom={direction}>
      <motion.div
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          console.log(swipe)

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      >
        <div className="flex justify-center items-center">
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
       </motion.div>
    
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};
