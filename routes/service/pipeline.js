var allTasks = require('./pipeline.data');
// 0 : '',
//     1 : ' process',
//         2 : ' succeed',
//             3 : ' error'
//单个流水线任务包含不同步骤
var taskPool = allTasks[0];//单条流水线
var taskStop = false;
function asleep(time=1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 5000)
  })
}
var readFile = function(book, delay = 1000) {
	return new Promise(function(resolve, reject) {
    book.state = 1;//prossing
		setTimeout(() => {
      if (book.shouldFail) {
        book.state = 3; //succedd
        // throw new Error('任务执行出错!!')
      } else {
        book.state = 2;//succedd
        
      }
      console.log('readFile', book.stepName);
			resolve(book);
		}, book.time);
	});
};
function resetPipeline(){
  const { followList } = taskPool;
  for (let i = 0; i < followList.length; i++) {
    let m = followList[i].steps;
    for (let j = 0; j < m.length; j++) {
      m[j].state = 0;
    }
  }
  taskPool.finished = false;//流水线处理中
}
function* readFiles() {
  resetPipeline();
  taskStop = false;

  //部署开始
  taskPool.deployed = false;
  yield asleep(5000);
  taskPool.deployed = true;
  //部署完成
  const { followList} = taskPool;    
  for(let i=0;i<followList.length;i++){
    let m = followList[i].steps;
    for(let j=0;j<m.length;j++){
      let o = yield readFile(m[j]);
      if (o.state === 3 || taskStop) {//单个step出错，或点按钮停止，都停止
        console.log('frai');
        taskPool.finished = true;//流水线失败
        return;
      }
    }
  }  
  taskPool.finished = true;//流水线成功
  // console.log(JSON.stringify(taskPool))
}

function co(gen) {
	return new Promise(function(resolve, reject) {
		let it = gen;
		function next(data) {
			// 下一次迭代时将上一次的结果传递进去
			let { value, done } = it.next(data);
			if (!done) {
				value.then(function(data) {
					next(data); // 如果没完成继续迭代
				}, reject);
			} else {
				resolve(data);
			}
		}
		next();
	});
}

//开始执行流水线
module.exports = {
	startJob: function() {
		co(readFiles());
	},
  getOnePipeLine: function () {//获取单个流水线数据
		//获取单个流水线数据
		return allTasks[0];
	},
	getAllTasks: function() {
		return allTasks;
	},
	stopJob: function(pipeId=1000) {
    taskStop = true;
		taskPool.finished = true;
	},
	hasDone : function(){
    return taskPool.every((v, i) => {
      return v.finished === true;
    })
  }
};