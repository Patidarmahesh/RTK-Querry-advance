import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/rtk-query");
    console.log(`connect mongodb successfully ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb
