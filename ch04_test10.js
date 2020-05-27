var output = 'hello 1!';
var buffer1 = new Buffer(10);
var len = buffer1.write(output, 'utf8');
console.log('first parameter string : %s', buffer1.toString());

var buffer2 = new Buffer('hello 2!', 'utf8');
console.log('second parameter string : %s', buffer2.toString());

console.log('buffer type : %s', Buffer.isBuffer(buffer1));

var byteLen = Buffer.byteLength(output);
var str1 = buffer1.toString('utf8', 0, byteLen);
var str2 = buffer2.toString('utf8');

buffer1.copy(buffer2, 0, 0, len);
console.log('send buffer copy to string : %s', buffer2.toString('utf8'));

var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('merge 2 buffer : %s', buffer3.toString('utf8'));