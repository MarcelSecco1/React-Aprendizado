import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World com React!!</p>
        <a
          className="App-link"
          href="https://github.com/MarcelSecco1"
          target="_blank" rel="noreferrer"
        >
          Meu GitHub
        </a>
      </header>
    </div>
  );
}

export default App;