import React from "react";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {
  usePostUserMutation,
  useUpdateUserMutation,
} from "../ReduxFeatures/api/api";
import Table from "../Modules/Table";
import Form from "../Modules/Form";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [itemData, setItemData] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // _________FORM_________
  const [createPost, { isSuccess: isCreateSuccess, isError: isCreateError }] =
    usePostUserMutation();
  const [updatePost, { isSuccess: isUpdateSuccess, isError: isUpdateError }] =
    useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // if (isCreateError) {
  //   toast.error("Field to create data.!!");
  // }

  const fileChangeHandler = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const dataUri = await readFileAsDataUri(file);
      setSelectedImagePrev(dataUri);
    }
  };

  const handleEditPost = (item) => {
    handleOpen();
    setValue("userName", item.userName);
    setValue("password", item.password);
    setValue("image", item.image);
    setItemData(item);
  };

  const onSubmitHandler = async (form) => {
    const { userName, password, image } = form;
    const formData = new FormData();
    if (!userName || !password || !image)
      return <h1>Alll fields is required</h1>;
    try {
      formData.append("userName", userName);
      formData.append("password", password);
      formData.append("image", image[0]);
      if (itemData) {
        const id = itemData?._id;
        await updatePost({ id, formData });
        if (isUpdateSuccess) {
          toast.success("post is updated.!!");
          reset();
          handleClose();
          setItemData(null);
        }
      } else {
        // const newItem = {
        //   _id: Date.now(),
        //   userName,
        //   password,
        //   imageUrl: URL.createObjectURL(image[0]),
        // };
        await createPost(formData);
        handleClose();
        if (isCreateSuccess) {
          toast.success("post is created.!!");
          reset();
          handleClose();
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  // _________FORM_________

  return (
    <div>
      <div className="flex justify-center items-center p-4 bg-black">
        <button onClick={handleOpen} className="bg-pink-700 text-white text-xl rounded-sm p-2">Form open</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <Form
          handleOpen={handleOpen}
          onSubmitHandler={onSubmitHandler}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          itemData={itemData}
        />
      </Modal>
      <Table handleEditPost={handleEditPost} />
    </div>
  );
};

export default Home;
