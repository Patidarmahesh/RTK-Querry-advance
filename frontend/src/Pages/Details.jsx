import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../ReduxFeatures/api/api";
import Card from "../Modules/Card";
import Skelton from "../Modules/Skelton";

const Details = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetUserByIdQuery(id);
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      {!isLoading ? (
        <Card
          show="true"
          item={data?.data}
          className="w-full relative bg-gray-800 group h-[500px] cursor-pointer shadow-lg rounded-sm"
        />
      ) : (
        <Skelton />
      )}
    </div>
  );
};

export default Details;
