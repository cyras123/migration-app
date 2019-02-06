var express = require('express');
var router = express.Router();
const ObjectID = require("mongodb").ObjectID;

/* GET home page. */
router.get("/", (req, res, next) => {
  Samples.find({}).limit( 5 ).toArray((err, samples) => {
    if(err) {
      return console.log(err);
    }
    res.render("index", { samples : samples });
  });
});

module.exports = router;