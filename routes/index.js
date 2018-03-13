var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/getBooks', function(req, res, next) {
  res.send({ list : [{a : 1},{a : 2}]});
});
module.exports = router;
