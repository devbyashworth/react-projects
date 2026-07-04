import { useRef } from "react";
import logo from "./assets/logo.png";
import apple from "./assets/apple.png";
import google from "./assets/google.png";

const Textbox = ({ id, type, label }) => (
  <div className="textbox">
    <input id={id} type={type} autoComplete="off" required />
    <label htmlFor={id}>{label}</label>
  </div>
);

const App = () => {
  const canvasRef = useRef(null);

  // useWebGLBackground(canvasRef);

  return (
    <>
      <canvas ref={canvasRef} className="canvas" />

      <div className="card">
        <img src={logo} alt="LOGO" />

        <h2>Welcome back!</h2>
        <h3>Login to continue</h3>

        <form action="" className="form">
          <div className="sso socials">
            <button type="button" className="sso-btn">
              <img src={google} alt="Google" />
              <span>Google</span>
            </button>

            <button type="button" className="sso-btn">
              <img src={apple} alt="Apple" />
              <span>Apple</span>
            </button>
          </div>

          <div className="or">or</div>

          <Textbox id="email" type="email" label="Email" />

          <Textbox id="password" type="password" label="Password" />

          <button type="submit" className="btn">
            Login
          </button>
        </form>

        <a href="#">Forgot password?</a>

        <p className="footer">
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </>
  );
};

export default App;
