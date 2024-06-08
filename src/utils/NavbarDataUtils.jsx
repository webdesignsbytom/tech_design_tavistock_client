// Icons
import { IoIosContact } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { SiPolymerproject } from 'react-icons/si';

var navId = 0;

export const navbarLinksArray = [
  {
    id: navId++ + '_navbar',
    title: 'Home',
    url: '/',
    name: 'home',
    imageUrl: <FaHome />,
  },
  {
    id: navId++ + '_navbar',
    title: 'About',
    url: '/about',
    name: 'about',
    imageUrl: <IoIosContact />,
  },
  {
    id: navId++ + '_navbar',
    title: 'Portfolio',
    url: '/portfolio',
    name: 'portfolio',
    imageUrl: <SiPolymerproject />,
  },
  {
    id: navId++ + '_navbar',
    title: 'Sales',
    url: '/sales',
    name: 'sales',
    imageUrl: <IoIosContact />,
  },
  {
    id: navId++ + '_navbar',
    title: 'Contact',
    url: '/contact',
    name: 'contact',
    imageUrl: <IoIosContact />,
  },
];
