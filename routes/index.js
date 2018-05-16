var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/getBooks', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    // res.header("X-Powered-By",' 3.2.1')  
    // res.header("Content-Type", "application/json;charset=utf-8");  
  res.send({ list : [{a : 1},{a : 2}]});
});
module.exports = router;
