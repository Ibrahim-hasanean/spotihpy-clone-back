var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const auidoRouter = require("./routes/audio");
var app = express();
require("./config/mongoose");
require("./config/firebaseAdmin");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", auidoRouter);

app.use((err, req, res, next) => {
  if (!err.status) return res.status(500).json({ err: err.toString() });
  return res.status(400).json({ err: err.toString() });
});
module.exports = app;
