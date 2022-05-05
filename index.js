require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
// const sqlite3 = require("sqlite3");

// .static takes absolute path to 'build' folder
app.use(express.static(path.join(__dirname, "client/src")));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey this is the data for animals");
});

app.get("/hello", (req, res) => {
  res.json({ message: "hey there" });
});

app.get("/animals", (req, res) => {
  res.send("Animals page");
});

const port = process.env.PORT || 9000; //heroku wants to set its own port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
