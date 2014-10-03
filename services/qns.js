/**
* Qi Niu Service
*/
var qiniu = require('qiniu');

// Configuration
qiniu.conf.ACCESS_KEY = process.env['QINIU_ACC_KEY']
qiniu.conf.SECRET_KEY = process.env['QINIU_SER_KEY']

var IMG_BUCKET = 'arrking';

exports.uploadText = function(key, text, callback) {
    var putPolicy = new qiniu.rs.PutPolicy(IMG_BUCKET);
    uptoken = putPolicy.token();
	qiniu.io.put(uptoken, key, text, null, function(err, ret) {
		console.log('key:' +ret.key);
		console.log('hash:' + ret.hash);
		callback();
	});
}
