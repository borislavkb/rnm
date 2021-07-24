import "./Form.css";

export default function Form() {
  return (
    <form className="character__form">
      <input type="text" name="characterName" id="characterName" />
      <select className="characters__form____status">
        <option>All</option>
        <option>Unknown</option>
        <option>Dead</option>
        <option>Alive</option>
      </select>
    </form>
  );
}
