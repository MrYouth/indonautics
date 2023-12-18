import React from "react";
import { motion } from "framer-motion";
import Images from "../../../src/assets/Transition.png"

const sectionStyle = {
  backgroundImage: `url(${Images})`, // Set the path to your image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '70vh',
};

const contentStyle = {
  maxWidth: '800px',
  textAlign: 'center',
};

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const Transition = () => {
  return (
    <motion.div
      style={sectionStyle}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="section" id="about">
        <motion.div style={contentStyle}>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-white">
            Take A Look Our Unmatched Consulting Approach
          </div>
          <p className="text-lg leading-7 mb-4 text-white">
            IndoNautics always responds quickly and efficiently to your requirements. Whether your 
            requirements are planned or unplanned, IndoNautics will mobilize the right tools and specialists to 
            provide you with the services you require to minimize asset downtime anywhere in the world.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Transition;
