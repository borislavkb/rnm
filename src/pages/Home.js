import "./Home.css";
import img_cover from "../images/cover.png";

export default function Home() {
  return (
    <section className="App__content____Home">
      <h1>Welcome to the Rick and Morty App!</h1>
      <img
        className="App__content____Image"
        src={img_cover}
        alt="Rick and Morty falling into a void"
      />
      <h2>Developed by Boris during the neuefische Bootcamp</h2>
    </section>
  );
}
