require('marko/node-require').install();
 
var template = require('./index.marko');
 
template.render({
    name: 'World',
    colors: ["red", "green", "blue"]
},
    function (err, output) {
        console.log(output.toString());
    });