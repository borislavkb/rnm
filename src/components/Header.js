import "./Header.css";
import image_logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="App__header">
      <img
        className="App__header____Logo"
        src={image_logo}
        alt="Rick and Morty"
      />
      <nav className="App__navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </nav>
    </header>
  );
}
