const express = require("express");
const { connectDB } = require("./config/database.js");
const app = express();
const { User } = require("./models/user.js");

app.use(express.json());
app.post("/signup", async (req, res) => {
  //NOTE: Creating a new instance of the user model
  const user = new User(req.body);
  //NOTE: Saving the data in database
  try {
    await user.save();
    res.send("user added successfully ");
  } catch (err) {
    res.status(400).send("Error saving the data " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("database connnection establised ");
    app.listen(3000, () => {
      console.log("your sever is listening at port 3000");
    });
  })
  .catch((err) => {
    console.error("databae cannot be connected", err.message);
  });
