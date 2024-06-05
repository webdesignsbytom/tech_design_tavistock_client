// Icons
import { IoIosContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { SiPolymerproject } from "react-icons/si";

var navId = 0

export const navbarLinksArray = [
    {
      id: navId++ + "_navbar",
      title: 'Home',
      url: '/',
      name: 'home',
      imageUrl: <FaHome />,
    },
    {
      id: navId++ + "_navbar",
      title: 'Projects',
      url: '/projects',
      name: 'projects',
      imageUrl: <SiPolymerproject />,
    },
    {
      id: navId++ + "_navbar",
      title: 'Contact',
      url: '/contact',
      name: 'contact',
      imageUrl: <IoIosContact />,
    },
    {
      id: navId++ + "_navbar",
      title: 'Title',
      url: '/title',
      name: 'title',
      imageUrl: <IoIosContact />,
    },
    {
      id: navId++ + "_navbar",
      title: 'Title',
      url: '/title',
      name: 'title',
      imageUrl: <IoIosContact />,
    },
  ]