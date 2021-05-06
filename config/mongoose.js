const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("mongoose connected");
  }
);
