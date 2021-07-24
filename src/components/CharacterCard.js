import "./CharacterCard.css";
import image from "../images/logo.png";

export default function CharacterCard() {
  return (
    <li className="character__list____card">
      <img src={image} alt="" className="character__list____img" />
      <h3>Name</h3>
    </li>
  );
}
