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
const notes = ["C4", "Eb4", "G4"];
const notesObj = [
  { name: "C", note: "C4", val: "root", num: "1" },
  { name: "E", note: "Eb4", val: "minor", num: "3" },
  { name: "G", note: "G4", val: "perfect", num: "5" },
];
const flatSymbol = "&#9837;";
const toneTest = (ev) => {
  console.log("ev", ev);
  console.log("target", ev.target.id);
  console.log("last child", ev.currentTarget.lastChild);
  const note = ev.currentTarget.lastChild.id;
  //console.log(synth);
  if (ev.currentTarget.lastChild.id === note) {
    synth.triggerAttackRelease(note, "2n");
  }
};

const chordTest = () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("C4", "2n");
  synth.triggerAttack("Eb4", "2n");
  synth.triggerAttack("G4", "2n");
  synth.triggerRelease([...notes], now + 2);
};

const CmajorSlide = () => {
  return (
    <div className='slide-container'>
      <hr />

      <div className='slide-header'>
        <h1 className='slide-title'>
          C Minor Chord{" "}
          <span>
            <AiFillSound id='chord' onMouseDown={chordTest} size={50} />
          </span>
        </h1>
      </div>

      <div className='tone-container'>
        {notesObj.map((noteData, idx, arr) => (
          <div key={noteData.name} className='tone' onMouseDown={toneTest}>
            <div className='note-name' id={noteData.name}>
              {idx === 1
                ? `${noteData.name[0]}` + `<span></span>`
                : noteData.name}
              {/* {<>&#9837;</>} */}
            </div>
            <div className='note-number'>
              {noteData.num}
              {noteData.num === "3" ? "rd" : noteData.num === "5" ? "th" : "st"}
            </div>
            <div className='note-val'>{noteData.val}</div>
            <AiFillSound
              className='icon'
              id={noteData.note}
              //   onMouseDown={toneTest}
              size={45}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CmajorSlide;
