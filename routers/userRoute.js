const express = require("express");
const user = express();

const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

user.use(bodyParser.urlencoded({ extended: true }));
user.use(express.static(path.resolve(__dirname, "public")));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
const userController = require("../controllers/userControllers");
const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const { send } = require("process");
let url = "mongodb+srv://18460603:gomezrolon24@cluster1.iq7dwmw.mongodb.net/?retryWrites=true&w=majority";
user.post("/User", upload.single("file"), userController.importUser);

//Connect collection
async function connectTofifa() {
  return mongoose.connect("mongodb+srv://18460603:gomezrolon24@cluster1.iq7dwmw.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

//Query1
user.get("/query1", async function (req, res) {
  let db = await connectTofifa();
  const collection = db.connection.collection("datasets");
  let filter = {};
  if (req.query.Name) {
    filter["Name"] = req.query.Name;
  }
  if (req.query.Age) {
    filter["Age"] = req.query.Age;
  }
  if (req.query.Club) {
    filter["Club"] = req.query.Club;
  }
  let data = await collection.find(filter).project({}).toArray();
  res.json(data);
});

//Query2
user.get("/query2", async function (req, res) {
  let db = await connectTofifa();
  const collection = db.connection.collection("datasets");
  let filter = {};
  if (req.query.Name) {
    filter["Name"] = req.query.Name;
  }
  if (req.query.Nationality) {
    filter["Nationality"] = req.query.Nationality;
  }
  if (req.query.Club) {
    filter["Club"] = req.query.Club;
  }
  let data = await collection.find(filter).project({}).toArray();
  res.json(data);
});

//Query3
user.get("/query3", async function (req, res) {
  let db = await connectTofifa();
  const collection = db.connection.collection("datasets");
  let filter = {};
  if (req.query.Name) {
    filter["Name"] = req.query.Name;
  }
  if (req.query.Club) {
    filter["Club"] = req.query.Club;
  }
  if (req.query.JerseyNumber) {
    filter["JerseyNumber"] = req.query.JerseyNumber;
  }
  let data = await collection.find(filter).project({}).toArray();
  res.json(data);
});

//Query4
user.get("/query4", async function (req, res) {
  let db = await connectTofifa();
  const collection = db.connection.collection("datasets");
  let filter = {};
  if (req.query.Name) {
    filter["Name"] = req.query.Name;
  }
  if (req.query.Overall) {
    filter["Overall"] = req.query.Overall;
  }
  if (req.query.Club) {
    filter["Club"] = req.query.Club;
  }
  let data = await collection.find(filter).project({}).toArray();
  res.json(data);
});

//Query5
user.get("/query5", async function (req, res) {
  let db = await connectTofifa();
  const collection = db.connection.collection("datasets");
  let filter = {};
  if (req.query.Name) {
    filter["Name"] = req.query.Name;
  }
  if (req.query.PreferredFoot) {
    filter["PreferredFoot"] = req.query.PreferredFoot;
  }
  if (req.query.Club) {
    filter["Club"] = req.query.Club;
  }
  let data = await collection.find(filter).project({}).toArray();
  res.json(data);
});



module.exports = user;
