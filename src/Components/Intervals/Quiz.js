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
      alert("you got it right!");
      setScore(score + 1);
    } else {
      alert("incorrect answer");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          <p>
            You scored {score} out of {questions.length}
          </p>
          {score === questions.length ? (
            <p>Congrats! You got them all correct!</p>
          ) : (
            <button onClick={resetQuiz}>Retake Quiz?</button>
          )}
        </div>
      ) : (
        <>
          <div className='question-section'>
            {currentQuestion === 0 ? (
              <>
                <h2>Quiz Time!</h2>
              </>
            ) : null}
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <p className='question-text'>
              {questions[currentQuestion].questionText}
            </p>
            <div className='audio-sample'>
              <AiFillSound
                className='quiz-audio'
                onMouseDown={questions[currentQuestion].audio}
                size={100}
              />
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className='quiz-button'
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
