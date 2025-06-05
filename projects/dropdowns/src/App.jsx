import React, { useState } from "react";
import MenuItem from "./Components/MenuItem";

const Icon = ({ icon, className = "" }) => {
  return (
    <span className={`material-symbols-outlined ${className}`}>{icon}</span>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuHeight, setSubMenuHeight] = useState(0);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const items = [
    { name: "build", subItems: ["description", "folder", "article"] },
    {
      name: "devices",
      subItems: ["storage", "mouse", "keyboard", "headphones"],
    },
    { name: "logout" },
  ];

  const handleClick = (index, height) => {
    setActiveSubMenu(index);
    setSubMenuHeight(height);
    setIsSubMenuOpen(index !== null);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Icon icon="account_circle" /> Joe Doe
        <Icon className="chevron" icon="expand_more" />
      </button>
      <div
        style={{
          height: `${subMenuHeight || 168}px`,
        }}
        className="menu"
      >
        <div className={`menu-inner ${isSubMenuOpen ? "open" : ""}`}>
          <div className="main-menu">
            {items.map((item, index) => (
              <MenuItem
                key={item.name}
                index={index}
                name={item.name}
                subItems={item.subItems}
                activeSubMenu={activeSubMenu}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
