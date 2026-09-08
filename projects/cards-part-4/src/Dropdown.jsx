import React, { useState } from "react";

const Dropdown = ({ items, selectedItem, onSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={() => setOpen(!open)}>
        {selectedItem}
        <span className={`arrow ${open ? "open" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <button
              key={item}
              className="dropdown-item"
              onClick={() => {
                onSelect(item);
                setOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
