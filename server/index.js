const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: true,
    message: "Up and running",
  });
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running");
});
