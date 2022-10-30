const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const port = 4444

const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/index"));
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => {
    app.listen(process.end.PORT || port, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`server has been started on port ${port}`);
    });
    console.log("database has been started");
  })
  .catch((err) => console.log("db error", err));
