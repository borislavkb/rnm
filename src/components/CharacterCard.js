import "./CharacterCard.css";
import image from "../images/logo.png";

export default function CharacterCard({ name, imageSrc }) {
  return (
    <li className="character__list____card">
      <img src={imageSrc} alt="" className="character__list____img" />
      <h3>{name}</h3>
    </li>
  );
}
