require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

//création du serveur
const app = express();
app.use(formidable());
app.use(cors());

/*---ROUTES---*/
//Add your routes here

/*------------*/

app.get("/", async (req, res) => {
  try {
    res.json({ route: "/" });
  } catch (error) {
    res.status("400").json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(404).json("This route does not exist");
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
