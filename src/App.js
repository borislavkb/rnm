import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import CharacterListPage from "./components/CharacterListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__content">
        <Home />
        <CharacterListPage />
      </main>
    </div>
  );
}

export default App;
