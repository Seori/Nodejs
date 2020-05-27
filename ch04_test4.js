
var Calc = require('./calc3');

var calc = new Calk();
calc.emit('stop');

console.log(Calc.title + ' send event called.');