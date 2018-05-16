var fs = require('fs');
var taskPool = [
	{
		name: './aaa.txt',
        finished:false,
        time : 2000
	},
	{
		name: './bbb.txt',
        finished:false,
        time: 2000
	},
	{
		name: './ccc.txt',
        finished:false,
        time: 2000
	},
];
var readFile = function(book, delay = 1000) {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
            book.finished = true;
			resolve(book);
		}, book.time);
	});
};

function* readFiles() {
    for(let i=0;i<taskPool.length;i++){
        yield readFile(taskPool[i]);
    }
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

module.exports = {
	start: () => {
		co(readFiles());
	},
	getList: () => {
        return taskPool;
    },
};
