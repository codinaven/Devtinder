const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("hellow from the server");
});

app.listen(3000, () => {
  console.log("your sever is listening at port 3000");
});
