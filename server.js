const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 8080;

app.use(bodyParser.json());

// ROUTES
app.get("/", (req, res) => {
  try {
    // throw new Error("ERROR!");
    res.status(200).send("<h1>Lista skarg<h1>");
  } catch (error) {
    res.status(500).send("ERROR!");
  }
});

// COMPLAINS
const database = [
  { title: "Kamil wypił mydło w płynie", name: "Kamil Łamaga" },
  {
    title: "Marian nie przeprosił że miał racje!",
    name: "Marian Stonoga",
  },
];

// READ all

// CREATE
app.post("/complains", (req, res) => {
  try {
    console.log(req.body);
    const newComplain = { ...req.body, _id: database.length + 1 };
    res.status(200).send(newComplain);
    database.push(newComplain);
  } catch (error) {
    res.status(500).send("ERRROR!");
  }
});

// READ
app.get("/complains", (req, res) => {
  try {
    res.status(200).send(database);
  } catch {
    res.status(500).send("ERROR!");
  }
});

app.get("/complains/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = database.find((user) => user._id === id);
  console.log(id);
  try {
    res.status(200).send(user);
  } catch {
    res.status(500).send("ERROR!");
  }
});

// UPDATE
app.patch("/complains/:id", (req, res) => {
  const id = Number(req.params.id);

  try {
    let updateComplain = database.find((complain) => complain._id === id);
    updateComplain = { ...updateComplain, ...req.body };
    database[updateComplain._id - 1] = updateComplain;
    console.log(updateComplain);
    res.status(200).send(updateComplain);
  } catch (error) {
    res.status(500).send("ERROR");
  }
});

//DELETE
app.delete("/complains/:id", (req, res) => {
  const id = Number(req.params.id);

  try {
    const itemIndex = database.findIndex((complain) => complain._id === id);
    const deletedItem = database.splice(itemIndex, 1);
    res.status(200).send(deletedItem);
  } catch (error) {
    res.status(500).send("FUCKING ERRROR!!! Fix asap");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
