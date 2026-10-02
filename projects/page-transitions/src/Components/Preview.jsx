import { ease } from "./Animations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image from "./image.png";
import AnimatedText from "./AnimatedText";

const Preview = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center m-4 p-20">
      <h3 className="absolute top-[4%] uppercase text-gray-400 font-mono text-4xl">
        Preview Page
      </h3>
      <motion.div
        className="w-[500px] h-[300px]"
        animate={{
          x: "-50%",
          width: "680px",
          height: "450px",
        }}
        transition={{ duration: 1.5, ...ease }}
      >
        <Link to="/">
          <img
            src={image}
            alt="Solo Leveling"
            className="w-full h-full object-cover"
          />
        </Link>
      </motion.div>
      <div className="absolute left-[52%]">
        <AnimatedText
          text="Solo Leveling"
          className="text-6xl font-darker font-bold mb-8"
        />
        <div className="overflow-hidden text-lg">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-[500px] h-[300px]"
          >
            <strong className="text-gray-300">Solo Leveling </strong>is a South
            Korean web novel by Chugong, later adapted into a webtoon and anime.
            It follows Sung Jin-Woo, the weakest hunter in a world where humans
            fight monsters in dungeons. After a near-death experience, he gains
            a mysterious system that allows him to level up infinitely, turning
            him into the world's strongest hunter. The story features intense
            battles, world-building, and Jin-Woo's rise from weak to
            overpowered.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
