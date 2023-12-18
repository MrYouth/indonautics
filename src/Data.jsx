import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About Us",
  },
  {
    id: 3,
    href: "courses",
    link: "Gallery",
  },
  {
    id: 4,
    href: "teacher",
    link: "Services",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Development",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Business",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Science",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "IndoNautics Solutions",
    title: "We provide tailored maritime solutions using approved components for vessels, ideal for both new builds and retrofits.",
  },
  {
    id: 2,
    image: courses2,
    category: "Maintenance, Repair & Overhaul",
    title: "IndoNautics excels in swift maintenance, repairs, and overhauls, leveraging profound technical expertise for efficient job completion.",
  },
  {
    id: 3,
    image: courses3,
    category: "Marine Survey & Inspection",
    title: "Classed vessels must undergo regular maintenance surveys to uphold their classification society status. We offer comprehensive ship inspection services to ensure compliance with these requirements.",
  },
  {
    id: 4,
    image: courses4,
    category: "Upgrades & Retrofits",
    title: "Our service team is highly experienced in carrying out the Upgrades and Retrofits efficiently.",
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is Skillex?",
  },
  {
    id: 2,
    title: "What can I learn from Skillex?",
  },
  {
    id: 3,
    title: "Can I teach on Skillex?",
  },
  {
    id: 4,
    title: "What is included in my Skillex membership?",
  },
];
