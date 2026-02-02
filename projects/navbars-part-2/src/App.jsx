import React, { useState, useRef } from "react";

const items = [
  { name: "Explore", items: ["Following", "Popular", "Noteworthy"] },
  { name: "Talent", items: ["Jobs", "Browse", "Profiles", "Services"] },
  { name: "Blog", items: ["News", "Articles", "Community"] },
];

const Link = ({ item, isActive, onHover }) => {
  const linkRef = useRef(null);

  const handleHover = () => {
    const rect = linkRef.current.getBoundingClientRect();
    onHover(item, `${rect.x}px`);
  };

  return (
    <a
      ref={linkRef}
      onMouseEnter={handleHover}
      className={isActive ? "active" : ""}
    >
      {item.name}
    </a>
  );
};

const App = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [translateX, setTranslateX] = useState("0");
  const [activeItem, setActiveItem] = useState(null);

  const handleLinkHover = (item, x) => {
    setTranslateX(x);
    setActiveItem(item);
  };

  const handleMouseEnter = () => setIsHidden(false);
  const handleMouseLeave = () => setIsHidden(true);

  return (
    <div
      className="menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item) => (
        <Link
          key={item.name}
          isActive={activeItem?.name === item.name && !isHidden}
          item={item}
          onHover={handleLinkHover}
        />
      ))}

      <div
        className={`dropdown ${activeItem && !isHidden ? "visible" : ""}`}
        style={{
          transform: `translate(${translateX}, 0)`,
        }}
      >
        {activeItem?.items?.map((link) => (
          <a key={link}>{link}</a>
        ))}
      </div>
    </div>
  );
};

export default App;
