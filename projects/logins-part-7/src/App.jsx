// import { Blob } from "./Blob";
import loginImage from "./dev_by_ashworth.png";

const Blob = ({ className }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <path
          className="blob-path"
          fill="#6C63FF"
          d="M421.5,299Q419,348,389.5,390.5Q360,433,305,456Q250,479,196.5,454Q143,429,112.5,381Q82,333,78.5,277Q75,221,104.5,172Q134,123,188,95Q242,67,295.5,81.5Q349,96,390.5,134Q432,172,427.5,236Q423,300,421.5,299Z"
        />
      </svg>
    </div>
  );
};

// export default Blob;

const App = () => {
  return (
    <div className="card">
      <div className="content">
        <h2>Holla!</h2>
        <h3>Hey, welcome back to your place!</h3>
        <form action="">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div className="row">
            <div>
              <input type="checkbox" id="checkbox" defaultChecked />
              <label htmlFor="checkbox">Remember me</label>
            </div>

            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
      <Blob className="image blob" />
      {/* <img className="image" src={loginImage} alt="Login" /> */}
    </div>
  );
};

export default App;
