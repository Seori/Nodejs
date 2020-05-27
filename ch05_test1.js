var http = require('http');

// 서버객체를 생성합니다.
var server = http.createServer();

// 웹서버를 시작하면 3000번 포트에서 대기합니다.
var hostip = "127.0.0.1";
var port = 3100;
//server.listen(port, function(){
server.listen(port, hostip, '50000', function(){
   console.log('Web Server(%s, %d) Started.', hostip, port);
});