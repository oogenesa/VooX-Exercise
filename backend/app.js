const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://192.168.1.205:3000", "http://localhost:3000"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

app.use(routes);
app.listen(port, () => {
  console.log(`Server is runnin on port : ${port}`);
});
module.exports = app;
