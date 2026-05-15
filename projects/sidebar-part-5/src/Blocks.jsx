import { useRef, useState } from "react";

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const Button = ({ name, icon, isOpen, hasToggle, onClick }) => (
  <button type="button" onClick={onClick}>
    <Icon icon={icon} />
    <p>{name}</p>
    {hasToggle && <Icon icon={isOpen ? "remove" : "add"} />}
  </button>
);

const Blocks = ({ name, icon, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemsRef = useRef(null);

  const hasSubItems = subItems && subItems.length > 0;

  return (
    <li className={`block ${isOpen ? "open" : ""}`}>
      <Button
        name={name}
        icon={icon}
        isOpen={isOpen}
        hasToggle={hasSubItems}
        onClick={() => hasSubItems && setIsOpen(!isOpen)}
      />
      {hasSubItems && (
        <div
          className="block-inner"
          style={{
            height:
              isOpen && itemsRef.current ? itemsRef.current.scrollHeight : 0,
          }}
        >
          <ul className="block-items" ref={itemsRef}>
            {subItems.map((subItem) => (
              <li key={subItem.name}>
                <Button name={subItem.name} icon={subItem.icon} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Blocks;
