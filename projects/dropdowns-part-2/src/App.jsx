import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Menu from "./Menu";

const Overlay = ({ isOpen, onClick }) => {
  <div onClick={onClick} className={`overlay ${isOpen ? "open" : ""}`}></div>;
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <div ref={dropdownRef} className={`dropdown ${isOpen ? "open" : ""}`}>
      <span className="material-symbols-outlined">menu</span>
      <div className="input-field">
        <span className="material-symbols-outlined icon">mail</span>
        <input
          type="text"
          name=""
          id=""
          disabled
          placeholder="Ashworth Sakara"
        />
      </div>
      <span className="material-symbols-outlined">help</span>
      <span className="material-symbols-outlined">settings</span>
      <button
        onClick={() => setIsOpen(true)}
        className="material-symbols-outlined"
      >
        apps
      </button>
      <span className="material-symbols-outlined">account</span>

      {createPortal(
        <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />,
        document.body
      )}
      {createPortal(
        <Menu isOpen={isOpen} dropdownRef={dropdownRef} />,
        document.body
      )}
    </div>
  );
};

export default App;
