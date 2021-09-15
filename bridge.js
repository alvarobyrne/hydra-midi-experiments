var easymidi = require('easymidi');
var input = new easymidi.Input('VirtualJavascript',true);
var virtualOutput = new easymidi.Output('NodeVirtual', true);
input.on('noteon', function (msg) {
    virtualOutput.send('noteon', {
        note: msg.note,
        velocity: msg.velocity,
        channel: 0
    });

});