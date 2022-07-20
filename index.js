const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/index"));
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(
    "mongodb+srv://user:12345@cluster0.j8mrd.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4444, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("server has been started");
    });
    console.log("database has been started");
  })
  .catch((err) => console.log("db error", err));
