import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import NavBar from "./components/Navbar";
import { boardDefault } from "./utils/words";
import { useState, createContext } from "react";
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const correctWord = "RIGHT";
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light-mode" : "dark-mode";
  };
  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };
  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };
  const onEnter = () => {
    if (currAttempt.letter !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
  };
  return (
    <div className="App">
      <>
        <AppContext.Provider
          value={{
            board,
            setBoard,
            toggleTheme,
            isDarkMode,
            onSelectLetter,
            onDelete,
            onEnter,
            correctWord,
            currAttempt,
          }}
        >
          <NavBar />
          <div className="game">
            <Board />
            <Keyboard />
          </div>
        </AppContext.Provider>
      </>
    </div>
  );
}

export default App;
