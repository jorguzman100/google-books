const router = require("express").Router();
const bookRoutes = require("./books");
const GoogleAPIRoute = require("./GoogleAPI");

router.use("/books", bookRoutes);

router.use('/Google_API', GoogleAPIRoute);

module.exports = router;
