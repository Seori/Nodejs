var os = require('os');

console.log('system is hostname : %s', os.hostname());
console.log('system is memory : %d / %d', os.freemem(), os.totalmem());
console.log('[system is cpu info]\n');
console.dir(os.cpus());
console.log('[system network interface]\n');
console.dir(os.networkInterfaces());