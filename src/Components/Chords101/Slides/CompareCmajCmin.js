import React from "react";
import { AiFillSound } from "react-icons/ai";
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

const cMinNotes = ["C4", "Eb4", "G4"];
const cMajNotes = ["C4", "E4", "G4"];

const cMinor = () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("C4", "2n");
  synth.triggerAttack("Eb4", "2n");
  synth.triggerAttack("G4", "2n");
  synth.triggerRelease([...cMinNotes], now + 2);
};

const cMajor = () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("C4", "2n");
  synth.triggerAttack("E4", "2n");
  synth.triggerAttack("G4", "2n");
  synth.triggerRelease([...cMajNotes], now + 2);
};

const Compare = () => {
  return (
    <div className='slide-container'>
      <hr />

      <div className='slide-header'>
        <h1 className='slide-title'>Compare C maj to C min </h1>
      </div>

      <div className='chord-container'>
        <div className='tone'>
          <div className='note-name'>C</div>
          <div className='note-val'>major</div>
          <AiFillSound className='icon' onMouseDown={cMajor} size={45} />
        </div>
        <div className='note-name'>vs</div>
        <div className='tone'>
          <div className='note-name'>C</div>
          <div className='note-val'>minor</div>
          <AiFillSound className='icon' onMouseDown={cMinor} size={45} />
        </div>
      </div>
    </div>
  );
};

export default Compare;
