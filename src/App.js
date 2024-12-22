import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import NavBar from "./components/Navbar";
import { boardDefault } from "./utils/words";
import { useState, createContext } from "react";
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light-mode" : "dark-mode";
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
          }}
        >
          <NavBar />
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </>
    </div>
  );
}

export default App;
