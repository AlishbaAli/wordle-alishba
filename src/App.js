import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Board />
        <Keyboard />
      </>
    </div>
  );
}

export default App;
