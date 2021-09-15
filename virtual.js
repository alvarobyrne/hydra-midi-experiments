var easymidi = require('easymidi');
var virtualOutput = new easymidi.Output('NodeVirtual', true);
setInterval(function() {
console.log('sending',Math.random());
virtualOutput.send('noteon', {
  note: 64,
  velocity: 127,
  channel: 0
});
}, 1000);
