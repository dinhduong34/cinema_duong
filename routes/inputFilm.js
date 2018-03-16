var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body.NameFilm);
  console.log(req.body.styleFilm);
  console.log(req.body.coment)

});

module.exports = router;