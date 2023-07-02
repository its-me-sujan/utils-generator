const express = require("express");
const router = express.Router();

const contactRouter = require("../modules/contacts/contact.routes.api");
//mostly error handler is done in routes api
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Hello from API " });
  } catch (err) {
    next(err);
  }
});

router.use('/contacts', contactRouter);

module.exports = router;
