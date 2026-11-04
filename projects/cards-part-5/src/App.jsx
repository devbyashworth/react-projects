import { useState } from "react";
import bio from "./data/bio";
// import "./App.css";

const App = () => {
  const [liked, setLiked] = useState(false);

  const handleHireClick = () => {
    window.location.href = "mailto:hello@example.com?subject=Hiring%20Inquiry";
  };

  return (
    <main className="page">
      <article className="card">
        {/* Profile image */}
        <div className="image-wrapper">
          <img
            // src={bio.img}
            src="../src/dev.png"
            alt={`${bio.name} - ${bio.role}`}
            className="image"
          />

          <div className="image-overlay" />
        </div>

        {/* Card content */}
        <div className="content">
          <div className="heading">
            <div>
              <h1>{bio.name}</h1>
              <h2>{bio.role}</h2>
            </div>

            <span className="status">
              <span className="status-dot" />
              Available
            </span>
          </div>

          <p className="bio">{bio.bio}</p>

          {/* Tags */}
          {bio.tags?.length > 0 && (
            <div className="details" aria-label="Skills and technologies">
              {bio.tags.map((tag) => (
                <span className="item" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="footer">
            <div className="buttons">
              <button
                type="button"
                className="primary-btn"
                onClick={handleHireClick}
              >
                Hire me
              </button>

              <button
                type="button"
                className={`icon-btn ${liked ? "liked" : ""}`}
                aria-label={
                  liked
                    ? `Remove ${bio.name} from favorites`
                    : `Add ${bio.name} to favorites`
                }
                aria-pressed={liked}
                onClick={() => setLiked((current) => !current)}
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  {liked ? "favorite" : "favorite_border"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default App;
