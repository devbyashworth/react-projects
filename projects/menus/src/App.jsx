import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  const Page = ({ title, content }) => {
    return (
      <>
        <h2 className="title">{title}</h2>
        <p className="paragraph">{content}</p>
      </>
    );
  };

  const Home = () => <Page title="Home Page" />;

  const About = () => <Page title="About Us" content="Content Goes Here..." />;

  const Portfolio = () => (
    <Page title="Portfolio" content="Content Goes Here..." />
  );

  const Services = () => (
    <Page title="Services" content="Content Goes Here..." />
  );

  const Contact = () => <Page title="Contact" content="Content Goes Here..." />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
