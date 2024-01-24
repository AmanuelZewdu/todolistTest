const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./App/models/user");
const app = express();
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send("Hello Node Api");
});

app.get("/blog", (req, res) => {
  res.send("Hello , My name is");
});

//const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to  application." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

mongoose
  .connect(
    "mongodb+srv://admin:123456789Aman@cluster0.ukddws6.mongodb.net/Node-API?retryWrites=true&w=majority"
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

app.post("/user", async (req, res) => {
  debugger;
  console.log("body===>", req.body);
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/", async (req, res) => {
  try {
    const users = await user.find({});
    res.status(200).json(beers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
