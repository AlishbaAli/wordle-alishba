import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPos, attemptVal }) => {
  const { board, isDarkMode, correctWord, currAttempt } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  //   useEffect(() => {
  //     if (letter !== "" && !correct && !almost) {
  //       console.log(letter);
  //       setDisabledLetters((prev) => [...prev, letter]);
  //     }
  //   }, [currAttempt.attempt]);

  return (
    <div className={`letter ${!isDarkMode ? "light" : ""}`} id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
