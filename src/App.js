import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__content">
        <Home />
      </main>
    </div>
  );
}

export default App;
