import express from "express";
import cors from "cors";
import postRouter from "./Routes/postRoute.js";
import connectDb from "./ConnectDb/connectDb.js";
const PORT = 8000;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    method: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.use("/", express.static("public/fileupload"));
app.use("/api/v1", postRouter);

app.listen(PORT, (error) => {
  if (!error) {
    connectDb();
    console.log(`server is running on port ${PORT}`);
  } else {
    console.log(`somethis is problem ${error}`);
  }
});
