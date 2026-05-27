import { useState } from "react";

/* BACKGROUND */
const CardBackground = ({ activeView }) => (
  <div className={`card-bg ${activeView === "login" ? "login" : ""}`} />
);

/* SOCIAL */
const SocialButtons = () => (
  <div className="sso">
    <a href="#" className="fa-brands fa-facebook"></a>
    <a href="#" className="fa-brands fa-twitter"></a>
    <a href="#" className="fa-brands fa-linkedin"></a>
    <a href="#" className="fa-brands fa-discord"></a>
  </div>
);

/* HERO PANEL */
const HeroPanel = ({ type, activeView, title, text, buttonText, onToggle }) => (
  <div className={`hero ${type} ${activeView === type ? "active" : ""}`}>
    <h2>{title}</h2>
    <p>{text}</p>
    <button type="button" onClick={onToggle}>
      {buttonText}
    </button>
  </div>
);

/* LOGIN FORM */
const LoginForm = ({ activeView, toggleView }) => {
  return (
    <div className={`form login ${activeView === "login" ? "active" : ""}`}>
      <form>
        <h2>Welcome Back</h2>

        <input type="text" placeholder="Email / Username" />
        <input type="password" placeholder="Password" />

        <a href="#">Forgot Password?</a>

        <button type="button">SIGN IN</button>

        <p>
          Don’t have an account? <span onClick={toggleView}>Sign up</span>
        </p>

        <SocialButtons />
      </form>
    </div>
  );
};

/* REGISTER FORM */
const RegisterForm = ({ activeView, toggleView }) => {
  return (
    <div
      className={`form register ${activeView === "register" ? "active" : ""}`}
    >
      <form>
        <h2>Create Account</h2>

        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button type="button">SIGN UP</button>

        <p>
          Already have an account? <span onClick={toggleView}>Sign in</span>
        </p>

        <SocialButtons />
      </form>
    </div>
  );
};

/* APP */
export default function App() {
  const [activeView, setActiveView] = useState("login");

  const toggleView = () =>
    setActiveView((prev) => (prev === "login" ? "register" : "login"));

  return (
    <div className="card">
      <CardBackground activeView={activeView} />

      {/* LEFT HERO */}
      <HeroPanel
        type="register"
        activeView={activeView}
        title="Welcome back"
        text="Sign in to track your most recent investment gains."
        buttonText="LOGIN"
        onToggle={toggleView}
      />

      <RegisterForm activeView={activeView} toggleView={toggleView} />

      {/* RIGHT HERO */}
      <HeroPanel
        type="login"
        activeView={activeView}
        title="Hello there"
        text="Start your journey here and begin earning right away."
        buttonText="SIGN UP"
        onToggle={toggleView}
      />

      <LoginForm activeView={activeView} toggleView={toggleView} />
    </div>
  );
}
