require("dotenv").config();
const path = require("path");

// console.log(process.argv); //npm run start  --web-48 web-49 web-50

// const cohort1 = process.argv[2];
// const display = process.env.DISPLAY; //grabbed this by typing env in the console and choosing a property name

// if (cohort1 === "web-49") {
//   console.log(`${cohort1} is the best forever`);
// } else {
//   console.log(`booh cohort ${cohort1}`);
// }

// console.log(`the display is ${display}`);

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
// .static takes absolute path to 'build' folder

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
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
