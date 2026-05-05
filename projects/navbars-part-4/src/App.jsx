import React, { useState, useRef } from "react";
import logo from "./dev_by_ashworth.png";

const navItems = [
  { name: "Docs" },
  { name: "Guides" },
  {
    name: "Demos",
    items: ["React", "Svelte", "Vue"],
  },
  { name: "Issues" },
];

const NavItem = ({ item, onHover }) => (
  <div className="item" onMouseEnter={onHover}>
    {item.name}

    {item.items && (
      <div className="dropdown">
        <div>
          {item.items.map((subItem, i) => (
            <a href="#" key={i}>
              {subItem}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
);

const App = () => {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef(null);

  const handleHover = (e) => {
    const rect = e.target.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    setUnderlineStyle({
      width: rect.width + "px",
      transform: `translateX(${rect.left - parentRect.left}px)`,
    });
  };

  return (
    <header className="navbar">
      <div className="end">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <nav ref={navRef}>
        {navItems.map((item, index) => (
          <NavItem key={index} item={item} onHover={handleHover} />
        ))}

        <div className="underline" style={underlineStyle}></div>
      </nav>

      <div className="end">
        <span>v2.0.2</span>
      </div>
    </header>
  );
};

export default App;
