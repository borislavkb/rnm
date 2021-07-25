import "./Form.css";

export default function Form() {
  return (
    <form className="character__form">
      <input type="text" name="characterName" id="characterName" />
      <select className="characters__form____status">
        <option value="all">All</option>
        <option value="unknown">Unknown</option>
        <option value="dead">Dead</option>
        <option value="alive">Alive</option>
      </select>
    </form>
  );
}
