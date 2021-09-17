midi = null;  // global MIDIAccess object
function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
}
function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}
navigator.requestMIDIAccess().then( onMIDISuccess, onMIDIFailure );
console.log(midi)

akai = midi.inputs.get("-65886926")

virtualOutputName= 'NodeVirtualOutput';//Should match the name of the virtual output in the `bridge.js` file
nodeID=Array.from(midi.inputs).filter(input=>input[1].name===virtualOutputName)[0][1].id
node = midi.inputs.get(nodeID)

sincAbleton = Array(128).fill(0)
abletonVelocity = -1;
abletonNote=-1;
node.onmidimessage=function (e){
  let data = e.data
  let type = data[0];
  let index = data[1];
  abletonNote = index;
  let velocity = sincAbleton[index] = data[2];
  abletonVelocity=velocity;
  console.log('type: ', type,'index : ',index, 'velocity : ', velocity);
}

sincAkai = Array(128).fill(0)
akai.onmidimessage=function (e){
  let data = e.data
  let index = data[1];
  let datum = sincAkai[index] = data[2];
  console.log('index : ',index, 'datum : ', datum);
};
