import "./CharacterListPage.css";
import CharacterCard from "../components/CharacterCard";
import Form from "../components/Form";
import { Link } from "react-router-dom";

export default function CharacterListPage() {
  const mockArray = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
  ];

  return (
    <section className="characters">
      <Form />
      <ul className="character__list">
        {mockArray.map((mockChar) => {
          return (
            <Link
              key={mockChar.id}
              to={`/characters/singleCharacterPage/${mockChar.id}`}
            >
              <CharacterCard name={mockChar.name} imageSrc={mockChar.image} />
            </Link>
          );
        })}
      </ul>
    </section>
  );
}
