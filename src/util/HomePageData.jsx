// Icons
import { FaMobileAlt, FaLaptopCode, FaRobot } from 'react-icons/fa';
import { AiFillOpenAI } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";

var infoButtonId = 0;

export const infoBoxDataArray = [
  {
    id: infoButtonId++ + '_info_button',
    title: 'Mobile Development',
    desc: 'Custom mobile apps for Android and iOS.',
    imageUrl: <FaMobileAlt />,
  },
  {
    id: infoButtonId++ + '_info_button',
    title: 'Web Development',
    desc: 'Responsive and dynamic websites.',
    imageUrl: <FaLaptopCode />,
  },
  {
    id: infoButtonId++ + '_info_button',
    title: 'Desktop PC Apps',
    desc: 'Custom software for business use and device control.',
    imageUrl: <FaComputer />,
  },
  {
    id: infoButtonId++ + '_info_button',
    title: 'Sensors and Robotics',
    desc: 'Innovative robotics and sensory devices.',
    imageUrl: <FaRobot />,
  },
  {
    id: infoButtonId++ + '_info_button',
    title: 'Smart home and wearable',
    desc: 'Control and monitor devices and data in real time.',
    imageUrl: <AiFillOpenAI />,
  },
];
