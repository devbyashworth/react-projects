import React, { useEffect, useState } from "react";
import logo from "./dev_by_ashworth.png";
import "./App.css";

const strengthLabels = ["weak", "medium", "strong", "very-strong"];

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

const App = ({ placeholder = "Enter password", onChange }) => {
  const [strength, setStrength] = useState("");
  const [floatingCode, setFloatingCode] = useState([]);

  const getStrength = (password) => {
    let strengthIndicator = 0;

    if (/[a-z]/.test(password)) strengthIndicator++;
    if (/[A-Z]/.test(password)) strengthIndicator++;
    if (/\d/.test(password)) strengthIndicator++;
    if (/[^a-zA-Z0-9]/.test(password)) strengthIndicator++;

    if (password.length >= 16) strengthIndicator++;

    // Prevent going out of bounds
    if (strengthIndicator === 0) return "";
    return strengthLabels[Math.min(strengthIndicator - 1, 3)];
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setStrength(getStrength(value));

    // Call parent onChange if provided
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newSnippet = {
        id: Date.now(),
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

      <div className="card">
        <img src={logo} alt="Logo" />
        <h2>Join CraftCodeHub</h2>
        <h3>Build. Ship. Secure.</h3>

        <div className="textbox">
          <input
            type="text"
            name="email"
            id="email"
            value="devbyashworth@gmail.com"
            readOnly
          />
        </div>

        <div className="textbox">
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>{placeholder}</label>
        </div>

        <div>
          <div className={`bars ${strength}`}>
            <div></div>
          </div>
          <div className="strength">
            {strength && `${strength.replace("-", " ")} password`}
          </div>
        </div>

        <button type="button">Sign Up</button>

        <h4>
          <a href="#">Privacy Policy</a>
        </h4>

        <p>
          Already have an account? <a href="#">Login!</a>
        </p>
      </div>
    </>
  );
};

export default App;
