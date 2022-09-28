const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/todo");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const cors = require('cors')
app.use(express.json());
app.use(cors())
mongoose
  .connect(
    "mongodb+srv://rasel11:rasel11@cluster0.7dgocwt.mongodb.net/MyFokiraTodo?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then((res) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Database is error " + err);
  });
  app.use(router);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running port : ${port}`);
});
