import { useState, useRef } from "react";
import avatar from "./avatar.jpg";

const Icon = ({ icon, className = "" }) => {
  return (
    <span className={`material-symbols-outlined ${className}`}>{icon}</span>
  );
};

const Search = () => (
  <div className="navbar-search">
    <span className="material-symbols-outlined">search</span>
    <input type="text" placeholder="Search" />
  </div>
);

const NavLink = ({ item, activeItem, onHover }) => {
  const linkRef = useRef();

  const handleHover = () => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      onHover(item, rect.left); // Use `rect.left` for position
    }
  };

  return (
    <a
      ref={linkRef}
      className={item.name === activeItem?.name ? "active" : ""}
      onMouseEnter={handleHover}
    >
      {/* <Icon icon={item.name.toLowerCase()} /> */}
      {item.name}
    </a>
  );
};

const App = () => {
  const [translateX, setTranslateX] = useState(0);
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    { name: "About" },
    { name: "Skills", subItems: ["UI/UX", "Development", "Design"] },
    {
      name: "Projects",
      subItems: ["Chatbot", "Movie App", "Expense Tracker"],
    },
    { name: "Work", subItems: ["Portfolio", "Resume", "GitHub", "CodePen"] },
  ];

  const linkHover = (item, xPos) => {
    setActiveItem(item || null);
    setTranslateX(xPos);
  };

  return (
    <>
      <div className="navbar">
        <img src={avatar} alt="Dev by Ashworth" />
        <div className="navbar-menu">
          {items.map((item) => (
            <NavLink
              key={item.name}
              item={item}
              activeItem={activeItem}
              onHover={linkHover}
            />
          ))}

          <div
            style={{ translate: `${translateX}px 0` }}
            className={`navbar-dropdown ${
              activeItem?.subItems ? "visible" : ""
            }`}
          >
            {activeItem?.subItems?.map((subItem) => (
              <a key={subItem}>{subItem}</a>
            ))}
          </div>
        </div>
        <Search />
      </div>
    </>
  );
};

export default App;
