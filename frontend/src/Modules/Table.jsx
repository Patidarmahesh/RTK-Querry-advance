import React from "react";
import {
  useDeleteUserByIdMutation,
  useGetAllUserQuery,
} from "../ReduxFeatures/api/api";
import Card from "../Modules/Card";
import { toast } from "react-toastify";

const Table = ({ handleEditPost }) => {
  const { data } = useGetAllUserQuery("get");
  const [deletePost, { isSuccess }] = useDeleteUserByIdMutation();

  const handleDeletePost = async (id) => {
    deletePost(id);
    if (isSuccess) {
      toast.success("Post is deleted.!!");
    }
  };

  let newPost = data?.data || []
  

  return (
    <div className="bg-black w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
      {newPost?.map((item) => {
        return (
          <Card
            handleEditPost={handleEditPost}
            handleDeletePost={handleDeletePost}
            key={item?._id}
            item={item}
            className="w-full relative group h-[500px] cursor-pointer shadow-lg rounded-sm"
          />
        );
      })}
    </div>
  );
};

export default Table;
