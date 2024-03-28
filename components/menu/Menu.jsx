"use client";
import React, { useState } from "react";
import { menuList } from "../data/data";
import Button from "../button/Button";

const Menu = () => {
  const [data, setData] = useState(menuList);
  const [menu,setMenu] = useState("All Menu")
  
  const allMenu=(menu)=>
  {
    setData(menuList)
    setMenu(menu)

  }
  const filterData = (menu) => {
    setMenu(menu)
    const newData = menuList.filter((datas) => datas.type === menu);
    setData(newData);
   
  
  };
  return (
    <div className=" max-container py-4 relative min-h-screen">
      <div className=" py-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold ">Foods we serve for you</h2>
          <p className="text-gray-600 py-4">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

       <Button menu={menu} filterData={filterData} allMenu={allMenu} />
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 mt-6 max-w-[1050px] mx-auto ">
          {data.map((menu) => (
            <div
              key={menu.title}
              className="bg-white my-2 max-w-[450px] grid px-4 rounded-md max-md:w-[90%] max-md:mx-auto"
            >
              <div className="flex justify-between px-3 pb-3 pt-2">
                <h2 className=" font-bold">{menu.title}</h2>
                <p className="text-red-500 font-bold">${menu.price}</p>
              </div>
              <p className="text-gray-600 text-[14px] py-3">{menu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
