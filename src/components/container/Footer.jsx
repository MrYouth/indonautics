import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook, FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from "../../../src/assets/indonauticsLogo.png";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3 } },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {/* First Column */}
      <motion.div className="flex flex-col items-center mb-6">
        {/* Logo */}
        <motion.img
          src={Logo}
          alt="Logo"
          className="w-80 mb-2"
          variants={iconVariants}
        />
        {/* Short Description */}
        <motion.p className="text-center max-w-md mx-auto justify-center" variants={iconVariants}>
          IndoNautics is the right partner for ship owners all over the world. Response to all service inquiries typically falls within 12 hours.
        </motion.p>
        {/* Social Icons */}
        <motion.div className="flex mt-4" variants={iconVariants}>
          <a href="your-instagram-link" target="_blank" rel="noopener noreferrer" className="mr-2 text-2xl"><FaInstagram /></a>
          <a href="your-linkedin-link" target="_blank" rel="noopener noreferrer" className="mr-2 text-2xl"><FaLinkedin /></a>
          <a href="your-facebook-link" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaFacebook /></a>
        </motion.div>
      </motion.div>

      {/* Second Column */}
      <motion.div variants={iconVariants}>
        <p className="text-xl mb-4">Contact us</p>
        <motion.ul className="list-disc pl-4 space-y-2">
          <motion.li className="flex items-center space-x-2"><FaClock className="text-2xl" /> <span>9AM - 5PM</span></motion.li>
          <motion.li className="flex items-center space-x-2"><FaPhone className="text-2xl" /> <span>+628117700411</span></motion.li>
          <motion.li className="flex items-center space-x-2"><FaEnvelope className="text-2xl" /> <span>info@indonautics.com</span></motion.li>
          <motion.li className="flex items-center space-x-2"><FaMapMarkerAlt className="text-2xl" /> <span>Kara Industrial Park Block F no. 1, 29444, Batam, Riau Island - Indonesia</span></motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
