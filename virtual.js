var easymidi = require('easymidi');
var virtualOutput = new easymidi.Output('NodeVirtual', true);
let i=0;
setInterval(function() {
    i++;
    let note =60+ i%12;
    virtualOutput.send('noteon', {
        note,
        velocity: 127,
        channel: 0
    });
}, 100);
