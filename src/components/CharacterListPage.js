import "./CharacterListPage.css";
import CharacterCard from "./CharacterCard";
import Form from "./Form";

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
