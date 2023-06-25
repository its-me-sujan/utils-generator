const express = require("express");
const router = express.Router();

const apiRouter = require("./routes.api");
const uiRouter = require("./routes.ui");

router.use("/api/v1", apiRouter); //routes to routes.api.js
router.use("/",uiRouter); //routes to routes.ui.js

module.exports = router;