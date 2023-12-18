import React from "react";
import { motion } from "framer-motion";
import about from "../../../src/assets/imgAbout.png";

const containerVariants = {
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const About = () => {
  return (
    <motion.div
      className="section"
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div className="grid md:grid-cols-2 gap-8 place-items-center">
        <motion.div
          variants={itemVariants}
          className="border-[3px] border-solid border-Teal rounded-lg"
        >
          <img src={about} alt="" className="p-4" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Supporting Your Vessel Needs
          </div>
          <p className="text-lg text-gray leading-7 mb-4">
            <span className="text-blue-500 font-bold">
              <span style={{ color: "red" }}>I</span>ndo
              <span style={{ color: "red" }}>N</span>autics
            </span>{" "}
            (PT. Solusi Nautika Indonesia) – an Independent Marine Consultancy
            & Engineering with registered office in Batam, Indonesia. Since our
            founding, we’ve teamed up with companies and we help them overcome
            their current challenges together.
            <br /> <br />
            <span className="text-blue-500 font-bold">
              <span style={{ color: "red" }}>I</span>ndo
              <span style={{ color: "red" }}>N</span>autics
            </span>{" "}
            offers a wide range of marine & engineering services to the Maritime
            & Offshore Energy Construction Sector(s). We provide solutions to
            clients to get past obstacles and reach their goals.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
