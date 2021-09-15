var easymidi = require('easymidi');
console.log('easymidi: ', easymidi);
var inputs = easymidi.getInputs();
console.log('inputs: ', inputs);
/*
var virtualOutput = new easymidi.Output('NodeVirtual', true);
setInterval(function() {
console.log('sending',Math.random());
virtualOutput.send('noteon', {
  note: 64,
  velocity: 127,
  channel: 0
});
}, 1000);
*/

//'nanoKONTROL2 0' 
var input = new easymidi.Input('MPK Mini Mk II');
input.on('noteon', function (msg) {
    console.log('msg: ', msg);
  // do something with msg
});