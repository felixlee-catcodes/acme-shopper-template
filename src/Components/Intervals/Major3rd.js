import React from "react";
import Keyboard from "../Keyboard";
import { AiFillSound } from "react-icons/ai";
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

const Cmajor3rd = () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("C4", now);
  synth.triggerAttack("E4", now);
  synth.triggerRelease(["C4", "E4"], now + 1);
};

const Emajor3rd = () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("G4", now);
  synth.triggerAttack("B4", now);
  synth.triggerRelease(["G4", "B4"], now + 1);
};

const Fmajor3rd = () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("F4", now);
  synth.triggerAttack("A4", now);
  synth.triggerRelease(["F4", "A4"], now + 1);
};
const Major3rd = () => {
  return (
    <div>
      <div className='slide-header'>
        <h1 className='slide-title'>Root, 3rd, 5th: The Major 3rd</h1>
      </div>

      <ul className='slide-list'>
        <li className='slide-list-item'>
          The major 3rd is the defining quality of any major chord
        </li>
        <li className='slide-list-item'>
          In a C major chord, E is the note a major 3rd above C (the root note)
        </li>
      </ul>
      <div>
        <img src='static/major-3rd-keyboard.jpg' height={200} />
        <p className='text'>
          Listen to these examples to get familiar with the sound of the major
          3rd:
        </p>
        <div className='audio-samples'>
          <div className='sample'>
            <h4>C - E</h4>
            <AiFillSound size={45} onMouseDown={Cmajor3rd} />
          </div>
          <div>
            <h4>E - G</h4>
            <AiFillSound size={45} onMouseDown={Emajor3rd} />
          </div>
          <div>
            <h4>F - A</h4>
            <AiFillSound size={45} onMouseDown={Fmajor3rd} />
          </div>
        </div>
      </div>
      {
        /* <img
        src='https://th.bing.com/th/id/R.44d3cd636ec0497c5eaa3ae2ceb6961d?rik=HgZ7mYYn6i%2br3Q&riu=http%3a%2f%2fwww.pianotheoryexercises.com%2fwp-content%2fuploads%2f2017%2f08%2fintervals-in-C-major-scale-768x488.png&ehk=avr%2bqhvfaOLiA4yk%2fuLYitm%2fVNupFWcVXYmRPA7DfCA%3d&risl=&pid=ImgRaw&r=0'
        alt='test'
      ></img>
      <img
        src='https://th.bing.com/th/id/R.fc0ed460cbdb93fd021f906d1e93f45f?rik=kWxTIs4AQGhbdQ&riu=http%3a%2f%2fmusictheoryonline.com%2fwp-content%2fuploads%2fsites%2f24%2f2015%2f10%2fintervals-1.png&ehk=sc9Q3ECjE%2fsD85a2WERVUwaFgaTpt78G3sN%2fWm%2bBROE%3d&risl=&pid=ImgRaw&r=0'
        alt='scale intervals image'
        height={50}
      /> */
        // <img
        //   src='https://th.bing.com/th/id/R.f0eb04b08dea75566fdcae898c7ccca9?rik=6UtlYbpfpaSESQ&riu=http%3a%2f%2fwww.compadre.org%2fosp%2fEJSS%2f4497%2fT15_Scales%2fscales.png&ehk=Bn5qKhTi14Z1Mx03SvNTa76c8JaOZIJJABejW7GY0xk%3d&risl=&pid=ImgRaw&r=0'
        //   alt='alt'
        // ></img>
      }
    </div>
  );
};

export default Major3rd;
//  <img
//             src='https://th.bing.com/th/id/R.011d6c9ee0b392501d165c2d1d9c80ee?rik=nBbumG%2b5L%2fu8%2bw&riu=http%3a%2f%2fwww.markgunter.net%2fimages%2fmusic_theory%2fmajor_scale_intervals.jpg&ehk=usqLLCdZvo4RNJiaN0wD%2byXSM2dCLQ%2bdCbhwPhd6YOQ%3d&risl=&pid=ImgRaw&r=0'
//             alt='scale intervals image'
//           />
