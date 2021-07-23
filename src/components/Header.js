import "./Header.css";

export default function Header() {
  return (
    <header className="App__header">
      <img
        className="App__header____Logo"
        src="https://www.wallpapertip.com/wmimgs/1-11371_rick-and-morty-svg-free.jpg"
        alt="Rick and Morty"
      />
      <nav className="App__navigation">
        <a href="/">Home</a>
        <a href="/characters">Characters</a>
      </nav>
    </header>
  );
}
