import google from "./assets/google.png";
import home from "./assets/home.jpg";

function App() {
  return (
    <div className="card">
      <img src={google} alt="Google Icon" className="top-avatar" />

      <div className="main">
        <h2>Google</h2>
        <h3>Junior</h3>
        <h4>AI Engineer</h4>
        <h5>
          London, UK <span className="highlight">(Remote)</span>
        </h5>
      </div>

      <div className="details">
        <span className="salary">
          10k <em>/month</em>
        </span>
        <span className="date">1 hour ago</span>
      </div>

      <div className="footer">
        <div className="badge">
          <img src={home} alt="Home Office" className="bottom-avatar" />
          <p>
            <em>64%</em> <span className="text">profile match</span>
          </p>
        </div>

        <button>
          <span className="material-symbols-outlined">share</span>
        </button>

        <button>
          <span className="material-symbols-outlined">bookmark</span>
        </button>
      </div>
    </div>
  );
}

export default App;
