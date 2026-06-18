import React, { useState } from "react";
import logo from "./dev_by_ashworth.png";

const navButtons = [
  { name: "signin", label: "Sign In", icon: "user" },
  { name: "signup", label: "Sign Up", icon: "check" },
];

const NavButton = ({ onClick, isActive, label, icon }) => (
  <button type="button" className={isActive ? "active" : ""} onClick={onClick}>
    <i className={`fa-solid fa-${icon}`}></i>
    <span>{label}</span>
  </button>
);

const CardNav = ({ view, toggleView }) => (
  <ul className="card-nav">
    <li>
      <img src={logo} alt="Company Logo" />
      <span
        className="active-bar"
        style={{ top: view === "signin" ? "33.33%" : "66.66%" }}
      ></span>
    </li>

    {navButtons.map((btn) => (
      <li key={btn.name}>
        <NavButton
          icon={btn.icon}
          label={btn.label}
          onClick={() => toggleView(btn.name)}
          isActive={view === btn.name}
        />
      </li>
    ))}
  </ul>
);

const CardHero = ({ view }) => (
  <div className="card-hero">
    <div
      className="card-hero-inner"
      style={{ top: view === "signin" ? "0%" : "-100%" }}
    >
      {/* SIGN IN */}
      <div className="card-hero-content signin">
        <h2>Welcome Back.</h2>
        <h3>Please enter your credentials.</h3>
      </div>

      {/* SIGN UP*/}
      <div className="card-hero-content signup">
        <h2>Create Account.</h2>
        <h3>Start your journey with us.</h3>
      </div>
    </div>
  </div>
);

const CardForms = ({ view }) => (
  <div className="card-form">
    <div className="forms" style={{ top: view === "signin" ? "0%" : "-100%" }}>
      {/* SIGN IN FORM */}
      <div className="form-section">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">Sign In</button>
      </div>

      {/* SIGN UP FORM */}
      <div className="form-section">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">Sign Up</button>
      </div>
    </div>
  </div>
);

const App = () => {
  const [view, setView] = useState("signin");

  const toggleView = (target) => setView(target);

  return (
    <div className="card">
      {" "}
      <CardNav view={view} toggleView={toggleView} />
      <CardHero view={view} />
      <CardForms view={view} />
    </div>
  );
};

export default App;
