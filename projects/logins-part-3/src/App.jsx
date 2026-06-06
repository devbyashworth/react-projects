import React, { useState } from "react";

const SSOButtons = () => (
  <div className="sso">
    <a href="#">
      <i className="fa-brands fa-twitter"></i>
    </a>
    <a href="#">
      <i className="fa-brands fa-facebook"></i>
    </a>
    <a href="#">
      <i className="fa-brands fa-linkedin"></i>
    </a>
  </div>
);

const Hero = ({ type, active, title, text, buttonText, onClick }) => (
  <div className={`hero ${type} ${active ? "active" : ""}`}>
    <h2>{title}</h2>
    <p>{text}</p>
    <button type="button" onClick={onClick}>
      {buttonText}
    </button>
  </div>
);

const AuthForm = ({ type, active, title, children }) => (
  <div className={`form ${type} ${active ? "active" : ""}`}>
    <h2>{title}</h2>
    <SSOButtons />
    <p>Or use your email address</p>
    <form>{children}</form>
  </div>
);

const App = () => {
  const [view, setView] = useState("signup");
  const isSignup = view === "signup";

  const toggleView = () =>
    setView((prev) => (prev === "signup" ? "signin" : "signup"));

  return (
    <div className="card">
      <div
        className="card-bg"
        style={{
          transform: `translateX(${isSignup ? "0%" : "100%"})`,
        }}
      >
        <Hero
          type="signup"
          active={isSignup}
          title="Welcome Back!"
          text="Sign in to track your most recent investment gains."
          buttonText="SIGN IN"
          onClick={toggleView}
        />

        <AuthForm type="signup" active={isSignup} title="Sign Up">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">SIGN UP</button>
        </AuthForm>

        <Hero
          type="signin"
          active={!isSignup}
          title="Hey There!"
          text="Start your journey here and begin earning now."
          buttonText="SIGN UP"
          onClick={toggleView}
        />

        <AuthForm type="signin" active={!isSignup} title="Sign In">
          <input type="text" placeholder="Email / Username" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot password?</a>
          <button type="button">SIGN IN</button>
        </AuthForm>
      </div>
    </div>
  );
};

export default App;
