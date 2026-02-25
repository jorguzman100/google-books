const router = require("express").Router();
const googleController = require("../../controllers/GoogleController");

router.route("/:query")
  .get(googleController.search);

module.exports = router;
