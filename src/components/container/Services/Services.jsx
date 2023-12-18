import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Images1 from "../../../../src/assets/images1.jpg"
import Images2 from "../../../../src/assets/images2.jpg"
import Images3 from "../../../../src/assets/images3.jpg"
import Images4 from "../../../../src/assets/images4.jpg"

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const servicesRef = useRef(null);

  const isInView = () => {
    const rect = servicesRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const handleScroll = () => {
    if (isInView()) {
      setPopupVisible(true);
    } else {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openPopup = (service) => {
    setSelectedService(service);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  const handleBackgroundClick = () => {
    if (selectedService) {
      closePopup();
    } else {
      setPopupVisible(true);
    }
  };

  useEffect(() => {
    // Transition for both showing and hiding the popup
    if (selectedService !== null) {
      setPopupVisible(false);
      setTimeout(() => setPopupVisible(true), 0);
    }
  }, [selectedService]);

  const servicesData = [
    {
      id: 1,
      title: 'IndoNautics Solutions',
      description: (
        <div>
          <p>
            We deliver a wide range of products for the maritime industry based on readily available approved components.
            Our integrated and standalone system solutions are customized to suit the vessel specifications and requirements
            and are most suitable for new build and retrofits.
          </p>
          <p>Our in-house engineered and built systems cover:</p>
          <ul className="list-disc pl-6">
            <li>LV Switchboards, Motor Control Centre, Soft Starters, VFD Panels & Distribution Panels</li>
            <li>Engine & Propulsion Controls Systems</li>
            <li>Thruster & Steering Gear Controls</li>
            <li>Integrated Monitoring Alarm and Control Systems (IMAC)</li>
            <li>Power Management System</li>
            <li>Tank Gauging System</li>
            <li>HVAC System</li>
            <li>Switchgear (In-situ bus bar modifications)</li>
          </ul>
        </div>
      ),
      image: [Images1], // Replace with the actual path to your image
    },
    {
      id: 2,
      title: 'Maintenance, Repair & Overhaul',
      description: 'Maintenances, repairs, & overhauls are of the core services of IndoNautics. With deep technical and engineering skills, we are able to quickly analyze requirements and get down to completing the job.  We have reliable and professional teams in their own respective fields, for what we can repair including Main Engines, Auxiliary Engines, Boilers, Winches, Navigation System, Electrical & Automation System, Electrical Panels & Power Distribution, Inert Gas Systems, Cranes, Compressors, etc.',
      image: [Images2], // Replace with the actual path to your image
    },
    {
      id: 3,
      title: 'Marine Survey & Inspection',
      description: (
        <div>
          <p>
            Classed vessels must carry out class maintenance surveys according to the regular/periodical time. In order to keep retain/maintain the classification society status, in accordance with the above-stated issues, we provide such services of the ship inspection as follows:
          </p>
          <ul className="list-disc pl-6">
            <li>Ship Condition Inspection, which is typical of ship inspection (including ISM/ISPS/MLC audit), to assess the general condition of the ship/vessel, in order to determine the seaworthiness and the quality assurance of the ship for sustainable operation.</li><br></br>
            <li>Pre-Purchase Vessel Inspection, that has a similar type with the Ship Condition Inspection, but specifically in the assessment of the ship’s asset, especially in a technical view, in order to provide a ship profiling to the candidate of ship buyer.</li>
          </ul>
        </div>
      ),
      image: [Images3], // Replace with the actual path to your image
    },
    {
      id: 4,
      title: 'Upgrades & Retrofits',
      description: 'Our team is highly experienced in carrying out Upgrades and Retrofits efficiently. System Retrofits and Upgrades including Detailed Inspection, Planning, System Engineering and Class Approvals, System Integration and Build Up, Removal of Existing Panels and Instrumentation and Installation of the new Systems. To maintain vessel utilization to the maximum, our team can plan and carry out such upgrades and retrofits during the voyage with the least interruption to normal vessel operations.',
      image: [Images4], // Replace with the actual path to your image
    },
  ];

  return (
    <>
      <div ref={servicesRef} className="container" id="teacher">
        <div className='text-center mb-8 max-w-[400px] mx-auto'>
          <h1 className='text-3xl font-bold mb-4'>Our Services</h1>
        </div>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView="visible"
          transition={{ delay: 0.3 }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className='bg-white p-4 rounded-lg shadow-md w-64 h-full'
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className='w-full h-48 object-cover mb-4 rounded-md cursor-pointer'
                onClick={() => openPopup(service)}
                whileTap={{ scale: 0.95 }}
              />
              <h2 className='text-lg font-bold mb-2'>{service.title}</h2>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Popup */}
      {selectedService && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: popupVisible ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
          onClick={handleBackgroundClick}
        >
          <motion.div
            className="bg-white p-8 rounded-md"
            style={{
              maxWidth: '80%', // Adjust the maximum width as needed
              maxHeight: '80vh', // Adjust the maximum height as needed
              overflowY: 'auto', // Add vertical scrollbar if content exceeds maxHeight
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="absolute top-0 right-0 m-4 text-xl cursor-pointer" onClick={closePopup}>
              &times;
            </button>
            <h2 className='text-2xl font-bold mb-4'>{selectedService.title}</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {selectedService.description}
            </motion.p>
            {/* Add more details here */}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Services;
