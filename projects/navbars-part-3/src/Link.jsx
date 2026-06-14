import React, { useRef } from "react";

const item = [
  { name: "Explore", items: ["Following", "Popular", "Noteworthy"] },
  { name: "Talent", items: ["Browse", "Profiles", "Services", "Jobs"] },
  { name: "Blog", items: ["News", "Articles", "Community"] },
];

const Link = ({ item, isActive, onHover }) => {
  const linkRef = useRef();

  const handleHover = () => {
    const rect = linkRef.current.getBoundingClientRect();
    onHover(item, `${rect.x}px`);
  };
  return (
    <a
      className={isActive ? "active" : ""}
      ref={linkRef}
      onMouseEnter={handleHover}
    >
      {item.name}
    </a>
  );
};

export default Link;
