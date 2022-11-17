import React from "react";

let actx = new AudioContext();
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let out = actx.destination;
osc1.connect(gain1);
gain1.connect(out);

export default function AudioTest() {
  return (
    <div>
      AudioTest
      {console.log(actx)}
      {console.log(osc1)}
      {console.log(gain1)}
      {osc1.start()}
      <button onClick={() => osc1.stop()}>stop</button>
    </div>
  );
}
