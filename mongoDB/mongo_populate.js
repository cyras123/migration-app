
var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/migration";


var sample = require('./data/sample.json');
console.log("Data loaded to environment");




//connect to the database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});



//create a collection in database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("migration");

  dbo.createCollection("samples", function(err, res) {
    if (err) throw err;
    console.log("migration collection created!");
    db.close();
  });

});



//populate the database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  	var dbo = db.db("migration");

  	sample.forEach(function(value){
  		var person = value;

  		dbo.collection("samples").insertOne(person, function(err, res) {
    	if (err) throw err;
  		});
	});
	console.log("1000 items inserted to database");
	db.close();
});








