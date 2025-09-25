import { useRef } from "react";

const SubNavButton = ({ onClick, name, isActive }) => (
  <button
    type="button"
    className={`nav-button sub-item ${isActive ? "active" : ""}`}
    onClick={() => onClick(name)}
  >
    <span>{name}</span>
  </button>
);

const SubMenu = ({ item, openParent, activeItem, handleSubItemClick }) => {
  const navRef = useRef(null);
  const isOpen = openParent === item.name;

  return (
    <div
      className={`sub-nav ${isOpen ? "open" : ""}`}
      style={{
        height: isOpen ? `${navRef?.current?.clientHeight}px` : "0",
        overflow: "hidden",
        transition: "height 0.3s ease",
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item.items.map((subItem) => (
          <SubNavButton
            key={subItem}
            onClick={handleSubItemClick}
            name={subItem}
            isActive={activeItem === subItem}
          />
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
