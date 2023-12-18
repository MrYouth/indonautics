import React from "react";
import { motion } from "framer-motion";
import teacher1 from "../../assets/technical.jpeg";

const Technical = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
  };

  return (
    <motion.div
      className="section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="grid sm:grid-cols-2 place-items-center gap-4">
        <div className="pl-5">
          <motion.div className="font-bold text-xl mb-4">
            Technical & Strategy Consulting
          </motion.div>
          <motion.p className="text-lg leading-7 text-justify text-gray mb-4">
            Our clients rely on IndoNautics to organize, plan, and perform critical maintenance and repair work.
            Our management, engineers, and technicians have a strong sense of dedication, proud to be a part of a company ensuring superior quality, leading-edge technology, and highly specialized skills.
          </motion.p>
          <motion.ul className="list-none ml-5 mb-10">
            <motion.li className="flex items-center mb-10">
              <span className="text-green-500 mr-2">&#10003;</span> Precision
            </motion.li>
            <motion.li className="flex items-center mb-10">
              <span className="text-green-500 mr-2">&#10003;</span> Integrity
            </motion.li>
            <motion.li className="flex items-center mb-10">
              <span className="text-green-500 mr-2">&#10003;</span> Effective & Efficient
            </motion.li>
          </motion.ul>
        </div>
        <motion.div className="p-4 md:w-3/4 sm:row-start-1">
          <motion.img
            src={teacher1}
            alt=""
            className="max-w-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technical;
