import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../../../src/assets/video.mp4";

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Home = () => {
  return (
    <motion.div
      className="section full-width relative h-screen"
      id="home"
      variants={containerVariants}
      whileInView="visible"
      initial="hidden"
    >
      <div className="video-container absolute inset-0 overflow-hidden">
        <video autoPlay loop muted className="video-background absolute inset-0 w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <motion.div className="md:flex items-center justify-center relative z-10 h-full">
        <motion.div
          variants={itemVariants}
          className="text-white"
        >
          <div className="font-bold text-xs text-red-500 mb-4">
            PT.SOLUSI NAUTIKA INDONESIA
          </div>

          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold text-black">
            Supporting Your Vessel Needs
          </div>
          <p className="text-sm leading-7 max-w-sm text-black">
            Deliver excellence services and forge partnerships that have a global impact.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:w-[60%]"></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
