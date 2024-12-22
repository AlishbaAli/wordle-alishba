import React, { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPos, attemptVal }) => {
  const { board, isDarkMode } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  return <div className={`letter ${!isDarkMode ? "light" : ""}`}>{letter}</div>;
};

export default Letter;
