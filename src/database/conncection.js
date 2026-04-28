import mongoose from "mongoose";

export const databaseConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/Lib-Manag-sys")
    .then(() => {
      console.log("database connec");
    })
    .catch((err) => {
      console.log(err);
    });
};
