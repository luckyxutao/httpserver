var express = require('express');
var router = express.Router();
// import { getOnePipeLine, startJob, stopJob, hasDone, getAllTasks } from './pipeline';
var pipeLine = require('./pipeline');
console.log(pipeLine);

const { getOnePipeLine, startJob, stopJob, hasDone, getAllTasks } = pipeLine;
router.get(`/currentUser`,function(req,res,next){
	res.send({
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      notifyCount: 12,
    })
});
router.get('/pipeline/all', function(req, res, next) {
    res.send({
      data: {
        list: getAllTasks()
      }
    })
});

router.get('/pipeline/start', function(req, res, next) {
	startJob();
	res.send({
		ok: true
	})
});

router.get('/pipeline/stop', function (req, res, next) {
	stopJob();
	res.send({
		ok: true
	})
});
//获取一条流水线信息
router.get('/pipeline', function(req, res, next) {
	if (req.query.pipeId === '1000') {
		console.log('polling pipelines');
		res.send(getOnePipeLine())
	} else {
		res.send({
			data: null
		})
	}
});

module.exports = router;
