"use client";
import React, { useState } from "react";
import { imageList } from "../data/data";
import Button from "../button/Button";
import Image from "next/image";

const Gallery = () => {
  const [data, setData] = useState(imageList);
  const [menu, setMenu] = useState("All Menu");
  const allMenu = (menu) => {
    setData(imageList);
    setMenu(menu);
  };
  const filterData = (menu) => {
    setMenu(menu);
    const newData = imageList.filter((datas) => datas.name === menu);
    setData(newData);
  };
  return (
    <div className="max-container mt-12  min-h-screen">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Food Gallery</h2>
        <p className="text-gray-600">
          Who are in extremely love with eco friendly system.
        </p>

        <Button menu={menu} filterData={filterData} allMenu={allMenu} />
        <div className="grid gap-2 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1000px] mx-auto ">
          {data.map((images, index) => (
            <div className="relative h-64 " key={index}>
              <Image
                src={images.img}
                fill={true}
                sizes="(min-width: 1040px) 244px, (min-width: 780px) calc(30.42vw + 18px), 50vw"
                alt="image"
              
                className="object-cover overflow-hidden rounded-xl hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
