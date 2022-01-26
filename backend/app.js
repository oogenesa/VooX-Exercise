const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: [
    "https://localhost:3000",
    "https://shrouded-lowlands-36290.herokuapp.com/",
  ],
  credentials: true,
};
app.use(cors());
app.use(bodyParser.json());
const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//   useNewUrlParser: true,

//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");

//   next();
// });
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION");
  next();
});
app.use(routes);
app.listen(port, () => {
  console.log(`Server is runnin on port : ${port}`);
});
module.exports = app;
