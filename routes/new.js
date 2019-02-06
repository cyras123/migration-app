var express = require('express');
var router = express.Router();
const ObjectID = require("mongodb").ObjectID;



//GET Index
router.get("/", (req, res, next) => {
    res.render("new");
});


//POST add sample
router.post("/", (req, res, next) => {
  
  const sample = {
    ID: req.body.textID,
    age: req.body.textAge,
    gender: req.body.textGender,
    proff: req.body.textProff,
    district: req.body.textDistrict,
    dateOut:req.body.textDateOut,
    dateIn:req.body.textDateIn,
    interest:req.body.textInterest,
    personalview:req.body.textPersonalView
  };
      //Insert sample to DB
      if (sample.ID === "" || sample.age === "" || sample.gender === "") {
          res.redirect("/");
      } else {
          Samples.insertOne(sample, (err, result) => {
      if (err) {
        return console.log(err);
      }
      res.redirect("/");
    });
  }
});


module.exports = router;