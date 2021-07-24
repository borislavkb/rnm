import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import CharacterListPage from "./pages/CharacterListPage";
import SingleCharacterPage from "./pages/SingleCharacterPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__content">
        <Home />
        <CharacterListPage />
        <SingleCharacterPage />
      </main>
    </div>
  );
}

export default App;
