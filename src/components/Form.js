import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [charStatus, setCharStatus] = useState("all");

  function handleFilterChange(event) {
    setCharStatus(event.target.value);
  }

  return (
    <form className="character__form">
      <input type="text" name="characterName" id="characterName" />
      <select
        onChange={handleFilterChange}
        className="characters__form____status"
      >
        <option value="all">All</option>
        <option value="unknown">Unknown</option>
        <option value="dead">Dead</option>
        <option value="alive">Alive</option>
      </select>
    </form>
  );
}
