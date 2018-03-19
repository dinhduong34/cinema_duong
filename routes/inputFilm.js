var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('tao-phim', { title: 'Express' });

});
//Hiện thông tin phim lên console khi ta đăng phim
router.post('/', function (req, res, next) {
  console.log("Ten Phim: " + req.body.NameFilm);
  console.log("The Loai phim: " + req.body.StyleFilm)
  console.log("Nam phat hanh phim: " + req.body.month + req.body.year);
  console.log("Binh luan: " + req.body.Comment);

})

module.exports = router;
