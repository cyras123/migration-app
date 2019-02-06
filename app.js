const express = require("express");
const path = require("path");
const mongodb = require("mongodb");
const dateformat = require('dateformat');
const app = express();
const port = process.env.PORT || '3000';


var indexRouter = require('./routes/index');
var newRouter = require('./routes/new');
var editRouter = require('./routes/edit');
var deleteRouter = require('./routes/delete');

var db = require('./config/db');

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Setup MongoDB
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;


//Use Static Folders
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "node_modules")));


//Use EJS Template Engine
app.set("view engine", "ejs");


//Routes INdex
app.use('/', indexRouter);

//Routes New sample
app.use('/new', newRouter);

//Routes edit
app.use('/edit', editRouter);

//Routes delete
app.use('/delete', deleteRouter);




//Connect to MongoDB
MongoClient.connect(db.url, (err, database) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to DB");

  const db = database.db("migration");
  Samples = db.collection("samples");

  //Start Server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
