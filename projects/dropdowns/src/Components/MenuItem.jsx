import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import MenuButton from "./MenuButton";

const MenuItem = ({ name, index, subItems, activeSubMenu, onClick }) => {
  const menuRef = useRef(null);
  const [height, setHeight] = useState(0);
  const isActive = activeSubMenu === index;

  useEffect(() => {
    if (menuRef.current) {
      setHeight(menuRef.current.clientHeight);
    }
  }, [subItems]);

  return (
    <>
      <MenuButton
        onClick={subItems?.length ? onClick : () => null}
        name={name}
        index={index}
        hasSubItems={!!subItems?.length}
        subMenuHeight={height}
      />
      {subItems?.length > 0 && (
        <div ref={menuRef} className={`sub-menu ${isActive ? "open" : ""}`}>
          <MenuButton onClick={onClick} icon="arrow_back" name={name} />
          {subItems.map((subItem) => (
            <MenuButton key={subItem} name={subItem} />
          ))}
        </div>
      )}
    </>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  subItems: PropTypes.array,
  activeSubMenu: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
