const express = require("express");

const app = express();

const indexRouter = require("./routes");

// app.METHOD(PATH, HANDLER)
app.use("/", indexRouter);

app.listen(8000, () => {
  console.log("sever running on port 8000");
});

// params '/:' diyera lekhyo bhane
