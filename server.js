const express = require("express");
const mongoose = require("mongoose");
const User = require("./App/models/user");
const toDoList = require("./App/models/todolist");
const app = express();

app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send("Hello Node Api");
});

app.get("/blog", (req, res) => {
  res.send("Hello Beer, My name is Beer ");
});

//Add User
app.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Get User
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Add ToDOITem
app.post("/item", async (req, res) => {
  try {
    const item = await toDoList.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Get User
app.get("/items", async (req, res) => {
  try {
    const items = await toDoList.find({});
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update Items

app.put("/items/:id", async (req, res) => {
  const itemId = req.params.id;
  const newDesc = req.body.description;

  try {
    const item = await Beer.findById(itemId);
    if (!item) {
      res.status(404).json({ message: "Beer not found" });
      return;
    }

    item.description.push(newDesc);

    await item.save();
    res.status(200).json({ message: "item  updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:123456789Aman@cluster0.ukddws6.mongodb.net/todolist?retryWrites=true&w=majority"
    // "mongodb+srv://admin:123456789Aman@cluster0.ukddws6.mongodb.net/"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Node API app is running on port 3000");
    });
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
