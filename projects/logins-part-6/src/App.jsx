import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import logo from "./assets/dev_by_ashworth.png";

const socialButtons = [
  {
    name: "Google",
    icon: google,
    color: "#4285F4",
  },
  {
    name: "Facebook",
    icon: facebook,
    color: "#1877F2",
  },
  {
    name: "Twitter",
    icon: twitter,
    color: "#1DA1F2",
  },
];

const hearts = Array.from({ length: 5 }, (_, i) => i);

const Hero = () => (
  <div className="hero">
    {hearts.map((heart) => (
      <svg
        key={heart}
        className="heart"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 464s-208-118.4-208-272C48 118.4 102.4 64 176 64c44.8 0 80 25.6 96 64 16-38.4 51.2-64 96-64 73.6 0 128 54.4 128 128 0 153.6-208 272-208 272z" />
      </svg>
    ))}
  </div>
);

const Form = () => (
  <form className="form">
    <img src={logo} alt="Logo" />
    <h2>Login to your account</h2>
    <div className="socials">
      {socialButtons.map((button) => (
        <button
          key={button.name}
          className="social-btn"
          style={{ backgroundColor: button.color }}
        >
          <img src={button.icon} alt={button.name} />
          <p>
            <span className="extra-text">Login with</span>
            {button.name}
          </p>
        </button>
      ))}
    </div>
    <span className="or"></span>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
);

const App = () => {
  return (
    <div className="card">
      <Hero />
      <Form />
    </div>
  );
};

export default App;
