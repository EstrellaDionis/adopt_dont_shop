require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const ejsMate = require("ejs-mate");
const sqlite3 = require("sqlite3").verbose();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

//connection to SQlite DB
const db_name = path.join(__dirname, "data", "pets.db3");
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Succesful connection to the database 'pets.db3'");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/data", (req, res) => {
  const test = {
    titre: "Test",
    items: ["one", "two", "three"],
  };
  res.render("data", { model: test });
});

app.get("/pets", (req, res) => {
  const sql = "SELECT * FROM pets ORDER BY pet_id";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("pets", { model: rows });
  });
});

app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM pets WHERE pet_id = ?";
  db.get(sql, id, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("edit", { model: row });
  });
});

app.get("/create", (req, res) => {
  res.render("create", { model: {} });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO pets (name, type, breed, age, description, adopted) VALUES (?, ?, ?, ?, ?, ?)";
  const pet = [
    req.body.name,
    req.body.type,
    req.body.age,
    req.body.description,
    req.body.adopted,
  ];
  db.run(sql, pet, (err) => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/pets");
  });
});

app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM pets WHERE pet_id = ?";
  db.run(sql, id, (err) => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/pets");
  });
});

app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM pets WHERE pet_id = ?";
  db.get(sql, id, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("delete", { model: row });
  });
});

const port = process.env.PORT || 9000; //heroku wants to set its own port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
