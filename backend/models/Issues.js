const mongoose = require("mongoose");

const IssuesSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, ""],
  },
  priority: {
    type: String,
    required: [true, ""],
  },
  label: {
    type: Array,
    required: [true, ""],
  },
});

const Issues = mongoose.model("issues", IssuesSchema);

module.exports = Issues;
