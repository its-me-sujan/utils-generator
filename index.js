const express = require("express");

const app = express();

const indexRouter = require("./routes");

// middleware
// header token, router, ip block
app.use((req, res, next) => {
  console.log("Request received at " + Date.now());
  next();
});

// app.METHOD(PATH, HANDLER)
app.use("/", indexRouter);

app.listen(8000, () => {
  console.log("sever running on port 8000");
});

// params '/:' diyera lekhyo bhane
