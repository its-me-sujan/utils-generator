const express = require("express");
const router = express.Router();

const contactRouter = require("../modules/contacts/contact.routes.api");
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Hello from API " });
  } catch (err) {
    next(err);
  }
});

// Create
router.post("/", (req, res, next) => {
  contactController.create(req.body);
  res.json({ msg: "Thank you for submitting the form!" });
});

// List
router.post("/list", async (req, res, next) => {
    console.log({ data: req.body});
    const list = await contactController.list();
  });

module.exports = router;
