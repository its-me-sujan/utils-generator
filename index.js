const bodyParer = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// mongodb connection 
mongoose.connect("mongodb://localhost:27017/utils-generator").then(() => console.log("Database Connected!"));

const myPort = 8090;

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
app.use(bodyParer.json()); // json ko data lai read garna suru gar
app.use(bodyParer.urlencoded({extended:false})); // for form data capture 


// Serving the static files
app.use(express.static("public"));
// setting up the EJS Templating
app.set("view engine", "ejs");
app.set("views", "./views");

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

app.listen(myPort, () => {
  console.log("sever running on port "+ myPort);
});

// params '/:' diyera lekhyo bhane
