import { useState } from "react";
import animeList from "./animeList";

const App = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <div
      className="bg"
      style={{ backgroundImage: `url(${animeList[active].image})` }}
    >
      <div className="accordion">
        {animeList.map((anime, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <div
              key={anime.id}
              className={`accordion-item ${isActive}`}
              onClick={() => handleToggle(index)}
            >
              <img src={anime.image} alt={anime.name} />
              <div className="content">
                <span className={`material-symbols-outlined icon`}>
                  photo_camera
                </span>
                <div>
                  <h2>{anime.name}</h2>
                  <p>{anime.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
