import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';
import img1 from '../../../src/assets/img1.png';
import img2 from '../../../src/assets/img2.png';
import img3 from '../../../src/assets/img3.png';
import img4 from '../../../src/assets/img4.png';
import img5 from '../../../src/assets/img5.png';
import img6 from '../../../src/assets/img6.png';

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

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const CarouselImage = () => {
  return (
    <motion.div
      className="text-center"
      id="courses"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ margin: '20px 0', padding: '20px' }}
    >
      <motion.h1
        style={{
          fontSize: '2em',
          fontWeight: 'bold',
          marginBottom: '50px', // Adjusted margin for better spacing
        }}
        variants={textVariants}
      >
        Check out our latest work
      </motion.h1>
      <motion.div style={{ maxWidth: '70%' }} className="mx-auto">
        <Carousel>
          {[
            { src: img1, alt: 'RV. SARAFINA', caption: 'RV. SARAFINA' },
            { src: img2, alt: 'RV. SARAFINA', caption: 'RV. SARAFINA' },
            { src: img3, alt: 'MT. ANGEL 18', caption: 'MT. ANGEL 18' },
            { src: img4, alt: 'MT. ANGEL 18', caption: 'MT. ANGEL 18' },
            { src: img5, alt: 'FPSO BW UMUROA', caption: 'FPSO BW UMUROA' },
            { src: img6, alt: 'FPSO BW UMUROA', caption: 'FPSO BW UMUROA' },
          ].map((image, index) => (
            <Carousel.Item key={index}>
              <img
                style={{ maxWidth: '100%', height: 'auto', maxHeight: '100vh' }}
                className="d-block w-100"
                src={image.src}
                alt={image.alt}
              />
              <Carousel.Caption>
                <h3>{image.caption}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default CarouselImage;
