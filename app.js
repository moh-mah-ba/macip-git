const express = require("express");
const app = express();
const getmac = require("getmac");

const port = process.env.PORT || 4040;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", (req, res) => {
  const device = getmac.default();
  console.log(device);

  res.send(`Hello World + ${device}`);
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
