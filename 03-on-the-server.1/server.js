// Allow requiring `.marko` files
require('marko/node-require');
 
var http = require('http');
var hello = require('./hello');
var port = 8080;
 
http.createServer((req, res) => {
    // let the browser know html is coming
    res.setHeader('content-type', 'text/html');
 
    // render the output to the `res` output stream
    hello.render({ name:'Marko' }, res);
}).listen(port);