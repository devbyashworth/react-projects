import { useState } from "react";
import logo from "./dev_by_ashworth.png";

/* BACKGROUND */
const CardBackground = ({ view }) => {
  return (
    <>
      <div className={`card-bg card-bg-1 ${view}`} />
      <div className={`card-bg card-bg-2 ${view}`} />
    </>
  );
};

/* LOGO */
const LogoGroup = ({ logo, view }) => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        className={`logo logo-1 ${view === "login" ? "show" : ""}`}
      />
      <img
        src={logo}
        alt="logo"
        className={`logo logo-2 ${view === "register" ? "show" : ""}`}
      />
    </>
  );
};

/* LOGIN FORM */
const LoginForm = ({ view, toggleView }) => {
  return (
    <div className={`form login ${view === "login" ? "active" : ""}`}>
      <form>
        <h2>Welcome Back</h2>

        <input type="text" placeholder="Email / Username" />
        <input type="password" placeholder="Password" />

        <a href="#">Forgot Password?</a>

        <button type="button">SIGN IN</button>

        <p>
          Don’t have an account? <span onClick={toggleView}>Sign up</span>
        </p>
      </form>
    </div>
  );
};

/* REGISTER FORM */
const RegisterForm = ({ view, toggleView }) => {
  return (
    <div className={`form register ${view === "register" ? "active" : ""}`}>
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
      </form>
    </div>
  );
};

/* APP */
export default function App() {
  const [view, setView] = useState("login");

  const toggleView = () =>
    setView((prev) => (prev === "login" ? "register" : "login"));

  return (
    <div className="container">
      <div className="card">
        <CardBackground view={view} />
        <LogoGroup logo={logo} view={view} />

        <LoginForm view={view} toggleView={toggleView} />
        <RegisterForm view={view} toggleView={toggleView} />
      </div>
    </div>
  );
}
