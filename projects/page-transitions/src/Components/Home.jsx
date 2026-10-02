import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { paragraph } from "./Animations";
import image from "./image.png";

const Home = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center m-4 p-20">
      <h3 className="absolute top-[4%] uppercase text-gray-400 font-mono text-4xl">
        Home Page
      </h3>

      <div className="w-[500px] h-[300px] overflow-hidden">
        <Link to="/preview">
          <img
            src={image}
            alt="Solo Leveling"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      <div className="absolute top-[85%] text-center overflow-hidden">
        <motion.p
          variants={paragraph}
          initial={paragraph.initial}
          animate={paragraph.animate}
          exit={paragraph.exit}
        >
          Click on the Image to <br />
          transition to the next page
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
