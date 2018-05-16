var express = require('express');
var router = express.Router();
var multer = require('multer');
var task = require('./task');

router.get('/task/start', function(req, res, next) {
	task.start();
	res.json({
		ok: true,
	});
});

router.get('/task/getList', function(req, res, next) {
	res.json({
		ok: true,
		data: {
			list: task.getList(),
		},
	});
});

module.exports = router;
