const router = require("express").Router();
const IssuesController = require("./controllers/IssuesController");

// router.post("/issues", IssuesController.issues_post);
router.get("/issues", IssuesController.issues_get_all);
router.post("/issues_param", IssuesController.issues_get_param);

module.exports = router;
