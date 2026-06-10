import { useRef, useEffect, useState } from "react";

const Submenu = ({ isOpen, activeItem, items, onPageClick }) => {
  const listRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!listRef.current) return;

    if (isOpen) {
      setHeight(listRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, items]);

  return (
    <div className="sub-menu" style={{ height: `${height}px` }}>
      <ul ref={listRef}>
        {items.map((child) => (
          <li key={child.id}>
            <button
              type="button"
              onClick={() => onPageClick(child.id)}
              className={activeItem === child.id ? "active" : ""}
            >
              {child.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
