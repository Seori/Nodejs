var url = require('url');

var curUrl = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

var curStr = url.format(curUrl);

console.log('url address string %s', curStr);
console.dir(curUrl);

var querystring = require('querystring');
var param = querystring.parse(curUrl.query);

console.log('request parameter query value : %s', param.query);
console.log('original request parameter : %s', querystring.stringify(param));