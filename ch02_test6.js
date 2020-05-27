var nconf = require('nconf');
nconf.env();

console.log('os variables value : %s', nconf.get('OS'));