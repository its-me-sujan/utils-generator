const express = require("express");
const router = express.Router();

//mostly error handler is done in routes api
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Hello from API" });
  } catch (err) {
    next(err);
  }
});

router.post("/form", (req, res, next) => {
  console.log({ data: req.body });
  res.json({ msg: "Thank you for submitting the form!" });
});
module.exports = router;
