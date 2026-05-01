import React, { useEffect, useState } from "react";
import logo from "./dev_by_ashworth.png";

const items = ["home", "build", "cloud", "stacks", "email", "settings"];

const snippets = [
  "<div>",
  "</>",
  "{ }",
  "useState()",
  "async await",
  "const app = () => {}",
  "npm run dev",
  "<React />",
  "export default",
  "git commit -m",
  "function()",
  "</html>",
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [floatingCode, setFloatingCode] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSnippet = {
        id: Date.now() + Math.random(),
        text: snippets[Math.floor(Math.random() * snippets.length)],
        left: Math.random() * 100,
        size: 14 + Math.random() * 20,
        duration: 12 + Math.random() * 20,
        blur: Math.random() > 0.5 ? 0 : 2,
      };

      setFloatingCode((prev) => [...prev, newSnippet]);

      // Remove after animation completes
      setTimeout(() => {
        setFloatingCode((prev) =>
          prev.filter((item) => item.id !== newSnippet.id),
        );
      }, newSnippet.duration * 1000);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="dev-bg">
        {floatingCode.map((item) => (
          <span
            key={item.id}
            className="dev-code"
            style={{
              left: `${item.left}%`,
              fontSize: `${item.size}px`,
              animationDuration: `${item.duration}s`,
              filter: `blur(${item.blur}px)`,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              <span className="material-symbols-outlined icon">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
            <img src={logo} alt="" />
          </header>
          <nav>
            {items.map((item) => (
              <button type="button" key={item}>
                <span className="material-symbols-outlined icon">{item}</span>
                <p>{item}</p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default App;
