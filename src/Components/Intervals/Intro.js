import React from "react";

const IntervalIntro = () => {
  return (
    <div>
      <div className='slide-header'>
        <h1 className='slide-title'>Interval Crash Course </h1>
      </div>

      <ul className='slide-list'>
        <li className='slide-list-item'>
          In music theory, an interval is a{" "}
          <strong>difference in pitch between two sounds</strong>.
        </li>
        <li className='slide-list-item'>
          An interval may be described as <strong>vertical</strong> or{" "}
          <strong>harmonic</strong> if it pertains to{" "}
          <strong>simultaneously sounding tones</strong>, such as in a chord
        </li>
        <li className='slide-list-item'>
          In Western music, intervals are most{" "}
          <strong>
            commonly differences between notes of a diatonic scale
          </strong>
          . Intervals between successive notes of a scale are also known as{" "}
          <strong>scale steps</strong>.{" "}
        </li>
      </ul>
      <img
        className='slide-image'
        src='static/keyboard-notes.png'
        alt=''
        height={180}
        width={300}
      />
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

export default IntervalIntro;
//  <img
//             src='https://th.bing.com/th/id/R.011d6c9ee0b392501d165c2d1d9c80ee?rik=nBbumG%2b5L%2fu8%2bw&riu=http%3a%2f%2fwww.markgunter.net%2fimages%2fmusic_theory%2fmajor_scale_intervals.jpg&ehk=usqLLCdZvo4RNJiaN0wD%2byXSM2dCLQ%2bdCbhwPhd6YOQ%3d&risl=&pid=ImgRaw&r=0'
//             alt='scale intervals image'
//           />
