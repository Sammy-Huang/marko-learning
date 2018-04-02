// The following line installs the Node.js require extension
// for `.marko` files.  This should be called once near the start
// of your application before requiring any `*.marko` files.

 
var fs = require('fs');
 
// Load a Marko view by requiring a .marko file:
var hello = require('./hello');
var out = fs.createWriteStream('hello.html', { encoding: 'utf8' });
hello.render({ name: 'Frank' }, out);