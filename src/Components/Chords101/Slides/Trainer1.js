import React, { useState } from "react";
import { AiFillSound } from "react-icons/ai";

import * as Tone from "tone";

const cMajorSynth = () => {
  const cMajNotes = ["C4", "E4", "G4"];

  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack("C4", "2n");
  synth.triggerAttack("E4", "2n");
  synth.triggerAttack("G4", "2n");
  synth.triggerRelease([...cMajNotes], now + 1);
};

const AMinorSynth = () => {
  const notes = ["A4", "C4", "E4"];

  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack(notes[0], "2n");
  synth.triggerAttack(notes[1], "2n");
  synth.triggerAttack(notes[2], "2n");
  synth.triggerRelease([...notes], now + 1);
};

export default function Trainer() {
  const questions = [
    {
      questionText: "Is the following a major chord?",
      audio: cMajorSynth,
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "Is this chord major or minor?",
      audio: AMinorSynth,
      answerOptions: [
        { answerText: "Major", isCorrect: false },
        { answerText: "Minor", isCorrect: true },
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
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
            <div className='audio-sample'>
              <AiFillSound
                className='quiz-audio'
                onMouseDown={questions[currentQuestion].audio}
                size={45}
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
