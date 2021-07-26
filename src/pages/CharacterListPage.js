import "./CharacterListPage.css";
import CharacterCard from "../components/CharacterCard";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterListPage() {
  const [characters, setCharacters] = useState([]);

  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters((prevCharacters) => {
          return [...prevCharacters, ...data.results];
        });
        setTotalPages(data.info.pages);
      });
  }, [page]);

  function renderCharacters() {
    return characters.map((character) => {
      return (
        <Link
          key={character.id}
          to={`/characters/singleCharacterPage/${character.id}`}
        >
          <CharacterCard
            name={character.name}
            imageSrc={character.image}
            charStatus={character.status}
          />
        </Link>
      );
    });
  }

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <section className="characters">
      <Form />
      <ul className="character__list">{renderCharacters()}</ul>
      {page < totalPages && <button onClick={handleLoadMore}>Show more</button>}
    </section>
  );
}
