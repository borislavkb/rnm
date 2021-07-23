import "./Header.css";

export default function Header() {
  return (
    <header className="App__header">
      <img src="https://www.wallpapertip.com/wmimgs/1-11371_rick-and-morty-svg-free.jpg" />
      <nav className="App__navigation">
        <a href="/">Home</a>
        <a href="/characters">Characters</a>
      </nav>
    </header>
  );
}
