import React from "react";

const Skelton = () => {
  return (
    <div className="w-[600px]">
      <div className=" relative bg-gray-800 w-[600px] animate-pulse group h-[500px] cursor-pointer shadow-lg rounded-sm"></div>
      <div className="justify-center flex gap-2 py-4 text-xl text-white">
        <button className="bg-gray-800 flex-1 animate-pulse rounded-sm p-8"></button>
        <button className="bg-gray-800 flex-1 rounded-sm animate-pulse p-8"></button>
      </div>
    </div>
  );
};

export default Skelton;
