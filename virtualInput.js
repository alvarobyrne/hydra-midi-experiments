var easymidi = require('easymidi');
var input = new easymidi.Input('VirtualJavascript',true);
input.on('noteon', function (msg) {
    console.log('msg: ', msg);
  // do something with msg
});