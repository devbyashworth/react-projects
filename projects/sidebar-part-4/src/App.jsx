import { useState } from "react";

const items = [
  { name: "Home", icon: "home" },
  {
    name: "Settings",
    icon: "settings",
  },
  {
    name: "Create",
    icon: "create",
  },
  {
    name: "Account",
    icon: "account_circle",
  },
  {
    name: "Products",
    icon: "deployed_code_update",
  },
  {
    name: "Favorites",
    icon: "favorite",
  },
];

const Icon = ({ icon, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{icon}</span>
);

const App = () => {
  const [isOpen, setIsOpen] = useState("false");

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <header>
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon icon={`${isOpen ? "close" : "menu"}`} />
          </button>
          <img src="./dev.png" alt="company logo" />
        </header>
        <nav>
          {items.map((item) => (
            <button key={item.name} type="button">
              <Icon icon={item.icon} />
              <p>{item.name}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default App;
