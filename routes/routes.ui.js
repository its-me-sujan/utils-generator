const express = require("express");
const router = express.Router();
const CC = require("currency-converter-lt");

router.get("/", (req, res) => {
  // res.send({ msg: "Hello from UI" });
  res.render("index");
});

router.get("/accounts", (req, res) => {
  res.render("accounts");
});
router.get("/add-product", (req, res) => {
  res.render("add-product");
});
router.get("/edit-product", (req, res) => {
  res.render("edit-product");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/products", (req, res) => {
  res.render("products");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});  

// router.get("/converter/:currency1/:currency2/:value", async (req, res) => {
//   const { currency1, currency2, value } = req.params; //params get value in string
//   const currencyConverter = new CC({
//     form: currency1,
//     to: currency2,
//     amount: Number(value),
//   });
//   const result = await currencyConverter.convert();
//   res.send(`Converted Amount : ${result}`);
// });

module.exports = router;
