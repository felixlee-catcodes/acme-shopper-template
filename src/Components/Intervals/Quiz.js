import React, { useState } from "react";
import { AiFillSound } from "react-icons/ai";

import * as Tone from "tone";

const Cperfect5th = () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("C4", now);
  synth.triggerAttack("G4", now);
  synth.triggerRelease(["C4", "G4"], now + 1);
};

const Eperfect5th = () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("G4", now);
  synth.triggerAttack("D4", now);
  synth.triggerRelease(["G4", "D4"], now + 1);
};

const Fperfect5th = () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("F4", now);
  synth.triggerAttack("C4", now);
  synth.triggerRelease(["F4", "C4"], now + 1);
};

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

export default function IntervalQuiz() {
  const questions = [
    {
      questionText: "Is the interval a major 3rd or a perfect 5th?",
      audio: Cmajor3rd,
      answerOptions: [
        { answerText: "Major 3rd", isCorrect: true },
        { answerText: "Pefect 5th", isCorrect: false },
      ],
    },
    {
      questionText: "Is the interval a major 3rd or a perfect 5th?",
      audio: Eperfect5th,
      answerOptions: [
        { answerText: "Perfect 5th", isCorrect: true },
        { answerText: "Major 3rd", isCorrect: false },
      ],
    },
    {
      questionText: "Is the interval a major 3rd or a perfect 5th?",
      audio: Fperfect5th,
      answerOptions: [
        { answerText: "Major 3rd", isCorrect: false },
        { answerText: "Perfect 5th", isCorrect: true },
      ],
    },
    {
      questionText: "Is the interval a major 3rd or a perfect 5th?",
      audio: Fmajor3rd,
      answerOptions: [
        { answerText: "Major 3rd", isCorrect: true },
        { answerText: "Perfect 5th", isCorrect: false },
      ],
    },
    {
      questionText: "Is the interval a major 3rd or a perfect 5th?",
      audio: Emajor3rd,
      answerOptions: [
        { answerText: "Major 3rd", isCorrect: true },
        { answerText: "Perfect 5th", isCorrect: false },
      ],
    },
    {
      questionText: "Is the interval a major 3rd or a perfect 5th?",
      audio: Cperfect5th,
      answerOptions: [
        { answerText: "Major 3rd", isCorrect: false },
        { answerText: "Perfect 5th", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
            <div className='audio-sample'>
              <AiFillSound
                className='icon'
                onMouseDown={questions[currentQuestion].audio}
                size={45}
              />
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
