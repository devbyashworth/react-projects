import { useState } from "react";

const items = [
  {
    name: "Home",
    icon: "home",
  },
  {
    name: "Hosting",
    icon: "host",
  },
  {
    name: "Storage",
    icon: "storage",
  },
  {
    name: "Security",
    icon: "security",
  },
  {
    name: "Profile",
    icon: "person",
  },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={`sidebar ${isOpen ? "close" : "menu"}`}>
      <header>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "open"}
          </span>
        </button>
        <img src="./dev_by_ashworth.png" alt="company logo" />
      </header>
      <nav>
        {items.map((item) => (
          <button key={item.name} type="button">
            <span className="material-symbols-outlined icon">{item.icon}</span>
            <p>{item.name}</p>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default App;
