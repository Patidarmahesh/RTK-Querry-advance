import { postModel } from "../Modals/postModel.js";

export const createPost = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const image = req.file;
    if (!userName || !password || !image)
      return res
        .status(401)
        .json({ message: "Something is missing", success: false });
    const response = await postModel.create({
      ...req.body,
      image: req.file.filename,
    });
    if (!response) {
      return res
        .status(401)
        .json({ message: "post is not create", success: false });
    }
    return res
      .status(200)
      .json({ message: "post create is sucessfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPost = async (req, res) => {
  try {
    const response = await postModel.find({}).sort({createdAt:-1});
    if (!response) {
      return res
        .status(401)
        .json({ message: "youre post is emptiy", success: false });
    }
    return res.status(200).json({
      message: "get all post sucessfully",
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await postModel.findById(id);
    if (!response) {
      return res
        .status(401)
        .json({ message: "post is not found", success: false });
    }
    return res.status(200).json({
      message: "get single post sucessfully",
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePostById = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const { id } = req.params;
    const post = await postModel.findById(id);
    if (!post) {
      return res
        .status(401)
        .json({ message: "post is not found", success: false });
    }
    if (userName) post.userName = userName;
    if (password) post.password = password;
    if (req.file) post.image = req.file.filename;
    await post.save();
    return res
      .status(200)
      .json({ message: "post is update sucessfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await postModel.findByIdAndDelete(id);
    if (!response) {
      return res
        .status(401)
        .json({ message: "post is not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "delete single post sucessfully", success: true });
  } catch (error) {
    console.log(error);
  }
};
