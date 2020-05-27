var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calk = function(){
    var self = this;
    
    this.on('stop', function(){
        console.log('calc send stop event.');
    });
}

util.inherits(Calk, EventEmitter);
Calk.prototype.add = function(a, b){
    return a+b;
}

module.exports = Calk;
module.exports.title = 'calcurator';