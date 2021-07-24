import "./CharacterListPage.css";
import CharacterCard from "../components/CharacterCard";
import Form from "../components/Form";
import { Link } from "react-router-dom";

export default function CharacterListPage() {
  return (
    <section className="characters">
      <Form />
      <ul className="character__list">
        <Link to="">
          <CharacterCard />
        </Link>
      </ul>
    </section>
  );
}
