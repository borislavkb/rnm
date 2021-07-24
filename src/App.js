import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import CharacterListPage from "./pages/CharacterListPage";
import SingleCharacterPage from "./pages/SingleCharacterPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__content">
        <Switch>
          <Route path="/characters/singleCharacterPage/:id">
            <SingleCharacterPage />
          </Route>
          <Route path="/characters">
            <CharacterListPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
