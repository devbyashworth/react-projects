import { motion } from "framer-motion";
import { textAnimation } from "./Animations";

const AnimatedText = ({ text, className }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: 1, staggerChildren: 0.05 }}
      className="relative inline-block overflow-hidden"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={textAnimation}
          transition={{ duration: 1, ease: "backInOut" }}
          className={`relative inline-block ${className}`}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
