var easymidi = require('easymidi');
const virtualOutputName= 'NodeVirtualOutput';//Should be matched at performance file
var input = new easymidi.Input('VirtualJavascript',true);
var virtualOutput = new easymidi.Output(virtualOutputName, true);
input.on('noteon', function (msg) {
    virtualOutput.send('noteon', {
        note: msg.note,
        velocity: msg.velocity,
        channel: 0
    });

});
input.on('noteoff', function (msg) {
    console.log('msg: ', msg);
    virtualOutput.send('noteoff', {
        note: msg.note,
        velocity: msg.velocity,
        channel: 0
    });

});