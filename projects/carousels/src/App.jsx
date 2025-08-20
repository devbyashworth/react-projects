import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "./index.css";
import image1 from "./coming-soon.png";
import image2 from "./coming-soon.png";
import image3 from "./coming-soon.png";

const slides = [
  {
    title: "Get Started",
    subtitle: "Start with your email",
    control: <input type="email" placeholder="Email" />,
    image: image1,
  },
  {
    title: "Your Password",
    subtitle: "Let's make things secure",
    control: <input type="password" placeholder="Password" />, // Fixed typo: type="password"
    image: image2,
  },
  {
    title: "Let's Go",
    subtitle: "Smash the help button",
    control: <button className="btn">Sign Up</button>,
    image: image3,
  },
];

const App = () => {
  return (
    <div className="card">
      <ReactCarousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        swipeable
        emulateTouch
      >
        {slides.map((slide) => (
          <div key={slide.title} className="slide">
            <div className="image-wrapper">
              <img src={slide.image} alt={slide.title} />
            </div>
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            <div className="control">{slide.control}</div>
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

export default App;
