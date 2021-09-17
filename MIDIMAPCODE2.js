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

midi.inputs.forEach((a,k,i)=>{
    console.log(a)
    console.log(k)
    console.log(i)
})

akai = midi.inputs.get("-65886926")

nodeID=Array.from(midi.inputs).filter(input=>input[1].name=="NodeVirtual")[0][1].id
node = midi.inputs.get(nodeID)

sincAbleton = Array(128).fill(0)
node.onmidimessage=function (e){
  let data = e.data
  let index = data[1];
  let datum = sincAbleton[index] = data[2];
  console.log('index : ',index, 'datum : ', datum);
}

sincAkai = Array(128).fill(0)
akai.onmidimessage=function (e){
  let data = e.data
  let index = data[1];
  let datum = sincAkai[index] = data[2];
  console.log('index : ',index, 'datum : ', datum);
}

osc(()=>sincAbleton[55]/4,0.8,()=>sincAkai[1]*6/127).out()

noise(()=>{
return sincronizacion[2]*2+1
}).out()

osc(100,0.1,2).out()

osc(
100
,
0.1
,
2
).out()

osc(
  ()=>{
return sincronizacion[1]*2+100
}
,
()=>{
return sincronizacion[2]/127
}
,
()=>{
return sincronizacion[3]*6/127
})
.out()

noise(1,0.1).color(()=>{return sincronizacion[1]*0.1+0.5},0.3,0.7).invert(0.1).rotate(2,0.1).kaleid(()=>{return sincronizacion[2]*0.1+2/127})
.add(shape(4,0.3,(()=>{return sincronizacion[3]*0.01+0.3})).modulate(o0)) // Neutron //
.out()

noise(  ()=>{return sincronizacion[1]*0.1+1},()=>{return sincronizacion[2]*0.5/127}).kaleid(()=>{return sincronizacion[3]*0.1+4/127}).color(()=>{return sincronizacion[6]*0.1+0.5},0.2,0.8)
.add(noise(()=>{return sincronizacion[4]*0.5+3/127},()=>{return sincronizacion[5]*0.5+10/127}).color(()=>{return sincronizacion[7]*0.1},0.5,1))
.out()
