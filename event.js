let events = require('events');
let eventEmitter = new events.EventEmitter();
eventEmitter.on('someEvent',(arg1,arg2)=>{
    console.log(arg1,arg2);
});
eventEmitter.emit('someEvent','arg1','arg2');
console.log("This is the end");
