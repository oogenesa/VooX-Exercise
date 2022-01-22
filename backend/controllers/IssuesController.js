const Issues = require("../models/Issues");
const data = require("../data.json");

const search_label = (data_priority, label) => {
  let ret_temp = [];

  for (var i = 0, k = data_priority.length; i < k; i++) {
    if (label === []) {
      ret_temp = data_priority;
    } else {
      label.map((lbl) => {
        if (data_priority[i]["label"].includes(lbl)) {
          ret_temp.push(data_priority[i]);
        }
      });
    }
  }

  return ret_temp;
};

const search = (priority, label) => {
  let ret = [];

  if (priority === "") {
    ret = search_label(data, label);
  } else {
    let ret_temp = [];
    for (var i = 0, k = data.length; i < k; i++) {
      if (data[i]["priority"] === priority) {
        ret_temp.push(data[i]);
      }
    }

    ret = search_label(ret_temp, label);
  }
  return ret;
};

module.exports.issues_get_all = async (req, res) => {
  res.status(200).json(data);
};

module.exports.issues_get_param = async (req, res) => {
  const { priority, label } = req.body;
  var result = search(priority, label);
  const key = "_id";

  const arrayUniqueByKey = [
    ...new Map(result.map((item) => [item[key], item])).values(),
  ];

  res.status(200).json(arrayUniqueByKey);
};
// module.exports.issues_post = async (req, res) => {
//   try {
//     const post_issues = await Issues.create({});
//   } catch {}
// };
