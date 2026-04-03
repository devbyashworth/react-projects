import React, { useState } from "react";

// Add your images here
// import logo from "./logo.png";
// import signinImg from "./signin.png";
// import signupImg from "./signup.png";

const navButtons = [
  { name: "signin", icon: "check" },
  { name: "signup", icon: "plus" },
];

const NavButton = ({ onClick, isActive, label, icon }) => (
  <button type="button" className={isActive ? "active" : ""} onClick={onClick}>
    <i className={`ai-person-${icon}`} />
    <span>{label}</span>
  </button>
);

const CardNav = ({ view, toggleView }) => (
  <ul className="card-nav">
    <li>
      {/* <img src={logo} alt="logo" /> */}
      <span
        className="active-bar"
        style={{ top: view === "signin" ? "33.33%" : "66.66%" }}
      ></span>
    </li>

    {navButtons.map((btn) => (
      <li key={btn.name}>
        <NavButton
          icon={btn.icon}
          label={btn.name}
          isActive={view === btn.name}
          onClick={() => toggleView(btn.name)}
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
      {/* SIGNIN */}
      <div className="card-hero-content signin">
        <h2>Welcome Back.</h2>
        <h3>Please enter your credentials.</h3>
        {/* <img src={signinImg} alt="signin" /> */}
      </div>

      {/* SIGNUP */}
      <div className="card-hero-content signup">
        <h2>Create Account.</h2>
        <h3>Start your journey with us.</h3>
        {/* <img src={signupImg} alt="signup" /> */}
      </div>
    </div>
  </div>
);

const CardForms = ({ view }) => (
  <div className="card-form">
    <div className="forms" style={{ top: view === "signin" ? "0%" : "-100%" }}>
      {/* SIGNIN FORM */}
      <form className="form signin">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>

      {/* SIGNUP FORM */}
      <form className="form signup">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
);

const App = () => {
  const [view, setView] = useState("signin");

  const toggleView = (selected) => {
    setView(selected);
  };

  return (
    <div className="login">
      <div className="card">
        <CardNav view={view} toggleView={toggleView} />
        <CardHero view={view} />
        <CardForms view={view} />
      </div>
    </div>
  );
};

export default App;
