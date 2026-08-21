import logo from "./logo.jpg";
import { useRef } from "react";

const Menu = ({ isOPen, dropdownRef }) => {
  const menuRef = useRef(null);
  const rect = dropdownRef?.currency?.getBoundingClientRect();
  const top = `${rect?.y + 60}px`;
  const left = `${rect?.x - menuRef?.current?.clientWidth + 40}px`;

  return (
    <div
      ref={menuRef}
      className={`menu ${isOPen ? "open" : ""}`}
      style={{ top, left }}
    >
      <button>
        <img src={logo} alt="" />
        <span>Account</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>Google</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>Chrome</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>Gmail</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>Contact</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>Maps</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>Photo</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>Calender</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>News</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>YouTube</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>YT Music</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>Drive</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>Google TV</span>
      </button>
      <button>
        <img src={logo} alt="" />
        <span>Meet</span>
      </button>
    </div>
  );
};

export default Menu;
