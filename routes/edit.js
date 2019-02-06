var express = require('express');
var router = express.Router();
const ObjectID = require("mongodb").ObjectID;


//GET edit sample form
router.get("/:id", (req, res, next) => {
  const query = { _id: ObjectID(req.params.id) };
  Samples.find(query).next((err, sample) => {
    if (err) {
      return console.log(err);
    }
    res.render("edit", { sample: sample });
  });
});


//POST edit sample
router.post("/:id", (req, res, next) => {
  const query = { _id: ObjectID(req.params.id) };
  const sample = {
    ID: req.body.textID,
    age: req.body.textAge,
    gender: req.body.textGender,
    proff: req.body.textProff,
    district: req.body.textDistrict,
    dateOut:req.body.textDateOut,
    dateIn:req.body.textDateIn,
    interest:req.body.textInterest,
    personalView:req.body.textPersonalView
  };

	Samples.updateOne(query, {$set:sample}, (err, sample) => {
    if (err) {
      return console.log(err);
    }
    res.redirect("/");
  });
});


module.exports = router;
