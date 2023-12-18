import React from 'react'
import { logos } from "../../Data";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Collaboration = () => {
  return (
    <div>
        <div className="collaboration-section text-center text-2xl font-bold text-black mt-10">
          In Collaboration With
        </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="collaboration-logos flex items-center justify-center flex-wrap gap-8 p-2"
      >
        {logos.map((logo, index) => (
          <motion.div variants={item} className="w-28" key={index}>
            <img src={logo} alt="" className="w-full object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Collaboration