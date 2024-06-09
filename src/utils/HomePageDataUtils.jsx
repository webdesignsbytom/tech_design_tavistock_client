// Icons
import { FaMobileAlt, FaLaptopCode, FaRobot } from 'react-icons/fa';
import { AiFillOpenAI } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";

var headerInfoId = 0;
var infoButtonId = 0;

export const headerInfoArray = [
  {id: headerInfoId++, content: 'Web and App Design'},
  {id: headerInfoId++, content: 'Stylish and Modern'},
  {id: headerInfoId++, content: 'Fully Customizable'},
  {id: headerInfoId++, content: 'Games and Animations'},
  {id: headerInfoId++, content: 'Desktop Business Apps'},
  {id: headerInfoId++, content: 'Sensors and Circuit Intergration'},
  {id: headerInfoId++, content: 'Internal Business Mobile Apps'},
  {id: headerInfoId++, content: 'Smart Home and Wearables'}
]

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
    title: 'Sensors and Automation',
    desc: 'Innovative robotics and sensory devices.',
    imageUrl: <FaRobot />,
  },
  {
    id: infoButtonId++ + '_info_button',
    title: 'Smart Home and Wearable',
    desc: 'Control and monitor devices and data in real time.',
    imageUrl: <AiFillOpenAI />,
  },
];
