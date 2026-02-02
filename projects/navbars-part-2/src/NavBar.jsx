import React, { use, useState } from "react";
import { useRef } from "react";

const items = [
  { name: "Explore", items: ["Following", "Popular", "Noteworthy"] },
  { name: "Talent", items: ["Jobs", "Browse", "Profiles", "Services"] },
  { name: "Blog", items: ["News", "Articles", "Community"] },
];

const Link = ({ item, isActive, onHover }) => {
    const linkRef = useRef();
    
    const handleHover = () => {
        const rect = linkRef.current.getBoundingClientReact();
        onHover(item, `${rect.x}px`);
    };
};

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [translateX, setTranslateX] = useState("0");
  const [activeItem, setActiveItem] = useState(null);

  const handleLinkHover = (item, x) => {
    setTranslateX(x);
    setActiveItem(item);
  };

  const handleMouseEnter = () => {
    setIsHidden(false);
  }

  const handleMouseLeave = () => {
    setIsHidden(true);
  }

  return (
    // <a
    //   ref={linkRef}
    //   onMouseEnter={handleHover}
    //   className={isActive ? "active" : ""}
    // >
    //   {item.name}
    // </a>
  );
};

export default NavBar;
