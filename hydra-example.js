osc(()=>sincAbleton[70] , 0.8 , ()=>sincAkai[1]*6/127).out()

//osc(   "velocity"       , 0.1 ,     2                ).out()

//----------------------
osc(()=>abletonNote , 0.8 , ()=>sincAkai[1]*6/127).out()

//osc(  "note number" , 0.1 ,     2                ).out()

noise(()=>{
return sincAkai[2]*2+1
}).out()

noise(1,0.1)
.color(()=>( sincAkai[1]*0.1+0.5),0.3,0.7)
.invert(0.1)
.rotate(2,0.1)
.kaleid(()=>( sincAkai[2]*0.1+2/127))
.add(shape(4,0.3,(()=>( sincAkai[3]*0.01+0.3))).modulate(o0)) // Neutron //
.out()

noise(  ()=>( sincAkai[1]*0.1+1),()=>( sincAkai[2]*0.5/127))
.kaleid(()=>( sincAkai[3]*0.1+4/127))
.color(()=>( sincAkai[6]*0.1+0.5),0.2,0.8)
.add(noise(()=>( sincAkai[4]*0.5+3/127),()=>( sincAkai[5]*0.5+10/127))
.color(()=>sincAkai[7]*0.1,0.5,1))
.out()

