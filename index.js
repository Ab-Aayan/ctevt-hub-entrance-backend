const express = require("express");
const mongoose = require("mongoose"); 
const app = express();
const PORT = 8000;


mongoose
  .connect("mongodb://127.0.0.1:27017/ctevt-hub-entrance-backend", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");

    
    app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
  })
  .catch((error) => console.log("MongoDB Error:", error));

const userLoginSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userLoginSchema); // ✅ Fix: Use capital letter for model name

