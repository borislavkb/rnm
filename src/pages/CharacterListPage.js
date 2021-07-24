import "./CharacterListPage.css";
import CharacterCard from "../components/CharacterCard";
import Form from "../components/Form";

export default function CharacterListPage() {
  return (
    <section className="characters">
      <Form />
      <ul className="character__list">
        <CharacterCard />
      </ul>
    </section>
  );
}
