import { useState } from "react";
import animeList from "./animeList";
import "./index.css";

const App = () => {
  const [active, setActive] = useState(0);
  const handleToggle = (index) => setActive(index);

  return (
    <section className="image-accordion">
      {animeList.map((anime, index) => (
        <div
          key={anime.id}
          onClick={() => handleToggle(index)}
          className={`image-accordion-item ${active === index ? "active" : ""}`}
        >
          <img src={anime.image} alt={anime.name} />
          <div className="content">
            <span className={`material-symbols-outlined icon`}>
              photo_camera
            </span>
            <div>
              <h2 className="title">{anime.name}</h2>
              <p className="description">{anime.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default App;
