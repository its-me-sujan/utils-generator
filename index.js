const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ejs = require("ejs");

const app = express();

const indexRouter = require("./routes");

// // middleware
// // header token, router, ip block
// app.use((req, res, next) => {
//   console.log("Request received at " + Date.now());
//   next();
// });

// app.METHOD(PATH, HANDLER)
// setting up the third party middlewares
app.use(morgan("short"));
app.use(cors());

// setting up the EJS Templating
app.set("view engine", "ejs");
app.set("views", "./views");

// Serving the static files
app.use(express.static("public"));

// Trying to test the application level error handler
app.get("/broken", (req, res, next) => {
  throw new Error("Broken");
});

app.use("/", indexRouter);

// Application level error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong");
});

app.listen(8090, () => {
  console.log("sever running on port 8000");
});

// params '/:' diyera lekhyo bhane
