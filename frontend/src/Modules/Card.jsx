import React from "react";
import { Link } from "react-router-dom";

const Card = ({ show,className, item, handleDeletePost, handleEditPost }) => {
  return (
    <div>
      <Link to={`/details/${item?._id}`}>
        <div className={className}>
          <img
            src={`http://localhost:8000/${item?.image}`}
            className="object-cover h-full w-full"
          />
          <div className="h-full flex gap-2 justify-center items-center text-xl text-white w-full group-hover:opacity-100 bg-opacity-60 duration-500 transition-all inset-0 z-40 absolute opacity-0 bg-black">
            <h1 className="hover:text-green-800 hover:font-serif hover:font-bold">
              {item?.userName}
            </h1>
          </div>
        </div>
      </Link>
      <div className={` ${show&&"justify-center"} flex gap-2 py-4 text-xl text-white`}>
        <button
          onClick={() => handleDeletePost(item?._id)}
          className="bg-red-600 rounded-sm text-white text-xl p-4"
        >
          Delete post
        </button>
        <button
          onClick={() => handleEditPost(item)}
          className="bg-green-700 rounded-sm text-white text-xl p-4"
        >
          update post
        </button>
      </div>
    </div>
  );
};

export default Card;
