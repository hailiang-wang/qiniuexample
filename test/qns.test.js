var qns = require('../services/qns');

describe('io.js', function() {
	this.timeout(30000);
	it('test upload from a file', function(done) {
		console.log('log')
		var key = 'filename' + Math.random(1000);
		qns.uploadFromFile(key, null, function(){
			done();
		});
	});
})