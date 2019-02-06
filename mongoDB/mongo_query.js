var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";



//find one
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("migration");
  dbo.collection("samples").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


//query
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("migration");
  var query = {gender: 'female'};
  dbo.collection("samples").find(query).toArray(function(err, result) {
    if (err) throw err;
    result.forEach(function(item){
  		console.log(item["profession"]);
	});
    db.close();
  });
});

