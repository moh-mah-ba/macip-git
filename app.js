const express = require("express");
const macipRouter = require("./routes/macAddress");
const app = express();
const port = process.env.PORT || 4040;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/" , (req , res) => {
  res.send("Hello World")

})

app.use("/macip" , macipRouter)

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
