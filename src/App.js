import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img src="" alt="Logo" />
        <nav className="App__navigation">
          <a href="/">Home</a>
          <a href="/characters">Characters</a>
        </nav>
      </header>
      <main className="App__content">
        <Home />
      </main>
    </div>
  );
}

export default App;
