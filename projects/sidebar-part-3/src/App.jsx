import { useState } from "react";
import logo from "../src/dev_by_ashworth.png";
const navItems = ["home", "security", "build", "cloud", "mail", "settings"];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <header>
          <button
            type="button"
            className="burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "open"}
            </span>
          </button>
          <img src={logo} alt="company logo" />
        </header>
        <nav>
          {navItems.map((item) => (
            <button key={item} type="button">
              <span className="material-symbols-outlined">{item}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default App;
