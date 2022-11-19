import React from "react";
import { AiFillSound } from "react-icons/ai";
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

/* Goals for this component
    1. get a note (C4 = 261.63) to play when icon (import from react-icons) is clicked
        a. set up audioContext...should it be global or local to this component? global would likely mean passing the context in as a prop (???) will try it locally 1st
        b. create an oscillator
        c. add gain
        d. connect to destination
        e. create fcn that will start the note when button/element is clicked
        f. use onMouseDown
    1.1 (Revised) pulled in Tone.js and generated the individual chord tones, as well as the whole chord 

*/

// array of notes to save the name and freq of chord tones in objs could possibly be pulled from redux store in the future...
const notes = ["C4", "E4", "G4"];
const notesObj = [
  { name: "C4", val: "root", num: "1" },
  { name: "E4", val: "major", num: "3" },
  { name: "G4", val: "perfect", num: "5" },
];

const toneTest = (ev) => {
  console.log(ev);
  const note = ev.currentTarget.id;
  console.log(synth);
  synth.triggerAttackRelease(note, "2n");
};

const chordTest = () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("C4", "2n");
  synth.triggerAttack("E4", "2n");
  synth.triggerAttack("G4", "2n");
  synth.triggerRelease([...notes], now + 2);
};

const CmajorSlide = () => {
  return (
    <div className='slide-container'>
      <hr />

      <div className='slide-header'>
        <h1 className='slide-title'>
          C Major Chord{" "}
          <span>
            <AiFillSound id='chord' onMouseDown={chordTest} size={50} />
          </span>
        </h1>
      </div>

      <div className='tone-container'>
        {notesObj.map((noteData, idx) => (
          <div key={noteData.name} className='tone'>
            <h1>{noteData.name}</h1>
            <h1>{noteData.num}</h1>
            <h1>{noteData.val}</h1>
            <AiFillSound id={noteData.name} onMouseDown={toneTest} size={45} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CmajorSlide;
