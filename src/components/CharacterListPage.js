import "./CharacterListPage.css";

export default function CharacterListPage() {
  return (
    <section className="characters">
      <form>
        <input type="text" name="characterName" id="characterName" />
        <selection className="characters__status">
          <option>All</option>
          <option>Unknown</option>
          <option>Dead</option>
          <option>Alive</option>
        </selection>
      </form>
      <ul className="character__list">
        <li className="character__list____card">
          <img src="" alt="" />
          <h3>Name</h3>
        </li>
      </ul>
    </section>
  );
}
