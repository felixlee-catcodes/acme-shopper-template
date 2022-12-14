import React from "react";

let actx = new AudioContext();
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let out = actx.destination;
osc1.connect(gain1);
gain1.connect(out);
osc1.frequency.linearRampToValueAtTime(100, actx.currentTime + 6);

export default function AudioTest() {
  return (
    <div>
      AudioTest
      {/* {console.log(actx)}
      {console.log(osc1)}
      {console.log(gain1)} */}
      <br />
      {osc1.frequency.value}
      <br />
      {(osc1.type = "sine")}
      {console.log(actx.state)}
      {osc1.start()}
      {console.log(actx.state)}
      <br />
      <button onClick={() => osc1.stop()}>stop</button>
    </div>
  );
}
