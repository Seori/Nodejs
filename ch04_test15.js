var winston = require('winston');       // 로그처리모듈
var winstonDaily = require('winston-daily-rotate-file');        // 로그일별처리모듈
var moment = require('moment');     //시간처리모듈

function timeStampFormat(){
    return moment().format('YYYY-MM-DD HH:mm:ss');
};

var logger = new (winston.Logger)({
    transports:[
        new (winstonDaily)({
            name:'info-file',
            filename:'./log/server',
            datePattern:'_yyyy-MM-DD.log',
            colorize:false,
            maxsize:50000000,
            maxFiles:1000,
            level:'info',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        }),
        new (winston.transports.Console)({
            name:'debug-console',
            colorize:true,
            level:'debug',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        })
    ],
    exceptionHandlers:[
        new (winstonDaily)({
            name:'exception-file',
            filename:'./log/exception',
            datePattern:'_yyyy-MM-DD.log',
            colorize:false,
            maxsize:50000000,
            maxFiles:1000,
            level:'error',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        }),
        new (winston.transports.Console)({
            name:'exception-console',
            colorize:true,
            level:'debug',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        })
    ]
});