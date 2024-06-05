// Icons
import { FaMobileAlt, FaLaptopCode, FaRobot } from 'react-icons/fa';

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
    title: 'Robotics',
    desc: 'Innovative robotics and sensory devices.',
    imageUrl: <FaRobot />,
  },
];
