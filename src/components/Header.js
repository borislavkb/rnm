import "./Header.css";
import image_logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="App__header">
      <img
        className="App__header____Logo"
        src={image_logo}
        alt="Rick and Morty"
      />
      <nav className="App__navigation">
        <a href="/">Home</a>
        <a href="/characters">Characters</a>
      </nav>
    </header>
  );
}
