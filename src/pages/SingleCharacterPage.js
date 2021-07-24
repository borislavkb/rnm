import "./SingleCharacterPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//https://rickandmortyapi.com/api/character/:id

export default function SingleCharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderCharacter() {
    if (isLoading || character === null) {
      return "Loading...";
    }
    const { name, gender, status, type, species, image } = character;

    return (
      <section className="Single__character">
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>Status: {status} </p>
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
        <p>Type: {type} </p>
      </section>
    );
  }
  return renderCharacter();
}
