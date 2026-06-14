import React, { useRef, useState } from "react";

const items = [
  { name: "Explore", items: ["Following", "Popular", "Noteworthy"] },
  { name: "Talent", items: ["Browse", "Profiles", "Services", "Jobs"] },
  { name: "Blog", items: ["News", "Articles", "Community"] },
];

const NavItem = ({ item, onHover }) => {
  const ref = useRef();

  const handleHover = () => {
    const rect = ref.current.getBoundingClientRect();
    onHover(item, rect.left + rect.width / 2);
  };

  return (
    <a ref={ref} href="#" onMouseEnter={handleHover}>
      {item.name}
    </a>
  );
};

export default function App() {
  const [activeItem, setActiveItem] = useState(null);
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleHover = (item, pos) => {
    setActiveItem(item);
    setPosition(pos);
    setVisible(true);
  };

  return (
    <nav className="navbar" onMouseLeave={() => setVisible(false)}>
      {/* LOGO */}
      <div className="logo">DevByAshworth</div>

      {/* MENU */}
      <div className="menu">
        {items.map((item) => (
          <NavItem key={item.name} item={item} onHover={handleHover} />
        ))}
      </div>

      {/* SEARCH */}
      <div className="search">
        <input placeholder="Search..." />
      </div>

      {/* DROPDOWN */}
      <div
        className={`dropdown ${visible ? "visible" : ""}`}
        style={{ left: position }}
      >
        {activeItem?.items.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
