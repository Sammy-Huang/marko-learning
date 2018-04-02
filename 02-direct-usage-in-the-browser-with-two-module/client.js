
var helloWrapperComponent = require('./hello-wrapper');



helloWrapperComponent.renderSync({ name:'Marko' })
    .appendTo(document.body);