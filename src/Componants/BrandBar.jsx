/* eslint-disable */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import brand1 from "../assets/brand.png";
import brand2 from "../assets/brand2.jpg";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import BrnadHS from "../Componants/BrandHS";

function BrandBar() {
  const [isScrolling, setIsScrolling] = useState(true);
  const [direction, setDirection] = useState(-1); // -1 for left, 1 for right

  useEffect(() => {
    if (!isScrolling) {
      return;
    }
    const interval = setInterval(() => {
      setDirection((prevDirection) => prevDirection * -1);
    }, 10000); // 10 seconds duration, adjust as needed

    return () => clearInterval(interval);
  }, [isScrolling]);

  return (
    <motion.div
      className="flex w-full h-60 justify-start items-center py-4 rounded-2xl bg-white overflow-hidden relative cursor-pointer"
      onHoverStart={() => setIsScrolling(false)}
      onHoverEnd={() => setIsScrolling(true)}
    >
      <motion.div
        className="flex h-full py-4 absolute gap-7"
        animate={{
          x: isScrolling ? (direction === -1 ? -1000 : 1000) : 0, // Adjust the value as per your content's width
        }}
        transition={{
          repeat: Infinity,
          ease: "linear", // Smooth and continuous transition
          duration: 15, // Adjust duration as needed
        }}
      >
        <BrnadHS img={brand1}></BrnadHS>
        <BrnadHS img={brand2}></BrnadHS>
        <BrnadHS img={brand3}></BrnadHS>
        <BrnadHS img={brand4}></BrnadHS>
        <BrnadHS img={brand1}></BrnadHS>
        <BrnadHS img={brand2}></BrnadHS>
        <BrnadHS img={brand3}></BrnadHS>
        <BrnadHS img={brand4}></BrnadHS>
        <BrnadHS img={brand1}></BrnadHS>
        <BrnadHS img={brand2}></BrnadHS>
        <BrnadHS img={brand3}></BrnadHS>
        <BrnadHS img={brand4}></BrnadHS>
      </motion.div>
    </motion.div>
  );
}

export default BrandBar;
