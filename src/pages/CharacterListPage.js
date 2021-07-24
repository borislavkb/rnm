import "./CharacterListPage.css";
import CharacterCard from "../components/CharacterCard";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterListPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character?page=1";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  function renderCharacters() {
    return characters.map((character) => {
      return (
        <Link
          key={character.id}
          to={`/characters/singleCharacterPage/${character.id}`}
        >
          <CharacterCard name={character.name} imageSrc={character.image} />
        </Link>
      );
    });
  }

  return (
    <section className="characters">
      <Form />
      <ul className="character__list">{renderCharacters()}</ul>
    </section>
  );
}
