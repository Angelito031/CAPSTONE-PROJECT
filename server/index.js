const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const UserRouter = require("./Routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/users", UserRouter);

const PORT = process.env.PORT || 4000;
console.log(PORT);
mongoose
  .connect(process.env.URI)
  .then(
    app.listen(PORT, () => {
      console.log("Database Connected & Server Started");
    })
  )
  .catch((err) => {
    console.log(`Error connecting on DB: ${err}`);
  });
