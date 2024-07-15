/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import brand from "../../assets/brand2.jpg";
import GoldenStar from "../../assets/star.png";
import WhiteStar from "../../assets/star_white.png";
import reviewer from "../../assets/reviwer.jpg";
import Heading from "../Headnig";

function ReviewCard() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current); // Stop observing once the element is in view
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      animate={{ scale: inView ? 1 : 0 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.7 }}
      className="relative w-full h-72 flex justify-center bg-orange-500 rounded-3xl"
    >
      <div>
        <div
          className="absolute w-16 h-16 top-4 left-1/3 rounded-full bg-black"
          style={{
            backgroundImage: `url(${reviewer})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="absolute w-16 h-16 top-4 right-1/3 rounded-full bg-black"
          style={{
            backgroundImage: `url(${brand})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="w-full flex flex-col m-6 mt-12 p-2 justify-between items-center text-center bg-slate-100 rounded-3xl">
        <h3 className="font-bold flex mt-7">Brand Name</h3>
        <p className="flex text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          blanditiis amet temporibus consequuntur asperiores culpa
        </p>
        <div className="flex w-full justify-between items-center px-3">
          <div className="text-slate-400">1 year</div>
          <div className="flex gap-1">
            <img className="flex w-5 h-5" src={GoldenStar} alt="Golden Star" />
            <img className="flex w-5 h-5" src={GoldenStar} alt="Golden Star" />
            <img className="flex w-5 h-5" src={GoldenStar} alt="Golden Star" />
            <img className="flex w-5 h-5" src={WhiteStar} alt="WhiteStar" />
            <img className="flex w-5 h-5" src={WhiteStar} alt="WhiteStar" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ReviewCard;
