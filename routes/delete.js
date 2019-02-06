var express = require('express');
var router = express.Router();
const ObjectID = require("mongodb").ObjectID;



//DELETE delete todo
router.delete("/:id", (req, res, next) => {
  const query = {_id: ObjectID(req.params.id)};
  Samples.deleteOne(query, (err, response) => {
    if(err) {
      return console.log(err);
    }
    console.log("A Sample Deleted");
    res.sendStatus(200);
  });
});

module.exports = router;