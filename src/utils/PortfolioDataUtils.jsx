// Icons
import ReactIcon from '../assets/svg/reactjs-icon.svg';
import HTML5Icon from '../assets/svg/html5.svg';
import TailwindIcon from '../assets/svg/tailwindcss-icon.svg';
import CSS3icon from '../assets/svg/css3.svg';
import Expressjs from '../assets/svg/expressjs.svg';
import Prisma from '../assets/svg/file_type_light_prisma.svg';
import Javascript from '../assets/svg/javascript.svg';
import PythonIcon from '../assets/svg/python-icon.svg';
// React Icons
import {
  FaTabletAlt,
  FaTools,
  FaUserAlt,
  FaServer,
  FaMobile,
  FaMoneyCheckAlt,
} from 'react-icons/fa';
import { TfiLayoutSliderAlt } from 'react-icons/tfi';
import { GrUserAdmin, GrScorecard, GrGamepad } from 'react-icons/gr';
import { BiMenuAltRight, BiError } from 'react-icons/bi';
import { IoMdColorPalette, IoIosRibbon } from 'react-icons/io';
import {
  MdAdminPanelSettings,
  MdForum,
  MdModeNight,
  MdSdStorage,
  MdDataArray,
} from 'react-icons/md';
import { AiFillLayout, AiOutlineTwitter } from 'react-icons/ai';
import { HiBookOpen } from 'react-icons/hi';
import { TbMathFunction } from 'react-icons/tb';
import { BsFillChatDotsFill, BsPeopleFill } from 'react-icons/bs';
// Images
import TavyEpoxy from '../assets/images/projects/tavyepoxyMd.png';
import BioClicker from '../assets/images/projects/bioclickerMd.png';
import Myecoapp from '../assets/images/projects/myeaMd.png';
import Calculator from '../assets/images/projects/calculatorMd.png';
import MBSHome from '../assets/images/projects/mbs-home-md.png';
import WSHome from '../assets/images/projects/ws-home-md.png';
import WSOverview from '../assets/images/projects/ws-overview-md.png';
import WDBTMain from '../assets/images/projects/wdbt-main-md.png';
import WDBTPortfolio from '../assets/images/projects/wdbt-portfolio-md.png';
// Images - Phone
import BioCLickerPhone from '../assets/images/projects/bioclickerSm.png';
import MyecoappPhone from '../assets/images/projects/myeaSm.jpg';
import TavyepoxyPhone from '../assets/images/projects/tavyepoxyPhone.jpg';
import MatchedbettingPhone from '../assets/images/projects/matchedbettingPhone.jpg';
import WSHomeSm from '../assets/images/projects/ws-home-sm.png';
import WDBTNav from '../assets/images/projects/wdbt-nav-sm.png';
// Images portfolio component
import FullWeb1 from '../assets/images/projects/fullpage_2.png';
import FullWeb2 from '../assets/images/projects/fullpage_1.png';
import FullWeb3 from '../assets/images/projects/fullpage_4.png';
import App1 from '../assets/images/projects/cat_app_1.png';
import App2 from '../assets/images/projects/app_6.png';
import App3 from '../assets/images/projects/space_invaders_1.png';
import Circuit1 from '../assets/images/projects/arduplot_1.png';
import Circuit2 from '../assets/images/projects/circuit_1.png';
import Circuit3 from '../assets/images/projects/arduplot_2.png';

export const initialData = {
  id: 1,
  image: '',
  title: '',
  github: '',
  demo: '',
  icons: ['', ''],
  images: ['', '', ''],
  skills: ['', '', ''],
  headline: '',
  desc: '',
  featuredComponent: '',
  featuredDisplay: '',
};

// Skill Data
export const frontendSkills = [
  { name: 'HTML5', level: 'Experienced' },
  { name: 'CSS3', level: 'Experienced' },
  { name: 'Javascript', level: 'Experienced' },
  { name: 'React', level: 'Experienced' },
  { name: 'Tailwind CSS', level: 'Experienced' },
  { name: 'Typescript', level: 'Beginner' },
  { name: 'Wordpress/wix', level: 'Experienced' },
  { name: 'C#', level: 'Beginner' },
];

export const backendSkills = [
  { name: 'Express', level: 'Experienced' },
  { name: 'Node.js', level: 'Experienced' },
  { name: 'MySQL', level: 'Experienced' },
  { name: 'PostgreSQL', level: 'Experienced' },
  { name: 'Prisma', level: 'Experienced' },
  { name: 'MongoDB', level: 'Experienced' },
  { name: 'PHP', level: 'Beginner' },
];

let webImageId = 0;
export const portfolioWebImagesArray = [
  {
    id: webImageId++,
    image: FullWeb1,
    alt: 'Web and app display',
  },
  {
    id: webImageId++,
    image: FullWeb2,
    alt: 'Web and app display',
  },
  {
    id: webImageId++,
    image: FullWeb3,
    alt: 'Web and app display',
  },
];

let appImageId = 0;
export const portfolioAppImagesArray = [
  {
    id: appImageId++,
    image: App1,
    alt: 'App display',
  },
  {
    id: appImageId++,
    image: App2,
    alt: 'App display',
  },
  {
    id: appImageId++,
    image: App3,
    alt: 'App display',
  },
];

let circuitImageId = 0;
export const portfolioCircuitImagesArray = [
  {
    id: circuitImageId++,
    image: Circuit1,
    alt: 'Circuit display',
  },
  {
    id: circuitImageId++,
    image: Circuit2,
    alt: 'Circuit display',
  },
  {
    id: circuitImageId++,
    image: Circuit3,
    alt: 'Circuit display',
  },
];

export const portfolioDataArray = [
  {
    id: 1,
    image: MBSHome,
    url: 'matched-betting-simulator',
    prevUrl: 'tavyepoxy',
    nextUrl: 'worlds-smartest-quiz',
    title: 'Matched Betting Simulator',
    github: 'https://github.com/webdesignsbytom/matched-betting-simulator',
    demo: 'https://clever-rolypoly-136b82.netlify.app/',
    icons: [Javascript, ReactIcon, TailwindIcon, Expressjs, Prisma],
    images: [MatchedbettingPhone, Calculator, Calculator],
    skills: [
      { name: 'Advanced Algorithms', icon: <TbMathFunction size={20} /> },
      { name: 'Interactive Tutorial', icon: <HiBookOpen size={20} /> },
      { name: 'Forum/media functions', icon: <MdForum size={20} /> },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      { name: 'Personal Profiles', icon: <FaUserAlt size={20} /> },
    ],
    headline:
      'Teaching matched betting using specially designed calculator and simulator.',
    desc: 'Matched Betting Training is a app mainly designed to teach a player how to make a series of bets guaranteed to make a profit using our system. It is supported by a fleshed out website of user/member systems and forums for posting tips and tricks creating a community of betters. Most site of this type feature a betting calculator and basic instructions. This site goes one further and has built dummy bookie websites to be used in our "Bet Simulator" which takes you step by step through the processes of making a winning bet.',
    featuredComponent: 'Bet Simulator',
    featuredDisplay: '',
    liveSite: 'https://clever-rolypoly-136b82.netlify.app/',
  },
  {
    id: 2,
    image: WSHome,
    title: 'Worlds Smartest Quiz',
    url: 'worlds-smartest-quiz',
    prevUrl: 'matched-betting-simulator',
    nextUrl: 'myecoapp',
    github: 'https://github.com/webdesignsbytom/worlds-smartest-frontend',
    demo: 'https://main--silly-vacherin-3026f4.netlify.app/',
    icons: [Javascript, HTML5Icon, PythonIcon, TailwindIcon, Expressjs, Prisma],
    images: [WSHomeSm, WSHome, WSOverview],
    skills: [
      { name: 'Array Comparison methods', icon: <MdDataArray size={20} /> },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      { name: 'User Voting Systems', icon: <BsPeopleFill size={20} /> },
      { name: 'Game Design', icon: <GrGamepad size={20} /> },
      { name: 'Leaderboards', icon: <BsFillChatDotsFill size={20} /> },
    ],
    headline: 'A react and react native quiz app',
    desc: 'The worlds smartest person quiz app is a fun IQ and general knowledge squiz combined with a competitive user experience. With additional features that include user comments, likes and scoreboards. As well as using the users to vote on the values of the questions and change the overall reflected scores.',
    featuredComponent: 'User Voting',
    liveSite: 'https://main--silly-vacherin-3026f4.netlify.app/',
  },
  {
    id: 3,
    image: Myecoapp,
    title: 'Myecoapp',
    url: 'myecoapp',
    prevUrl: 'worlds-smartest-quiz',
    nextUrl: 'bio-clicker',
    github: 'https://github.com/webdesignsbytom/myecoapp-deploy',
    demo: 'https://dazzling-biscuit-b01617.netlify.app/',
    icons: [Javascript, ReactIcon, TailwindIcon, Expressjs, Prisma],
    images: [MyecoappPhone, Myecoapp, Myecoapp],
    skills: [
      { name: 'Phone first design', icon: <FaMobile size={20} /> },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      { name: 'Liveupdate Highscores', icon: <GrScorecard size={20} /> },
      { name: 'Modern Layout', icon: <AiFillLayout size={20} /> },
      { name: 'User Achievements', icon: <IoIosRibbon size={20} /> },
      { name: 'Data and Error Logging', icon: <BiError size={20} /> },
      { name: 'Dark Mode', icon: <MdModeNight size={20} /> },
    ],
    headline: 'A environmental project to use traffic to earn funds',
    desc: 'A organizations front page and information to promote green causes. This site has multiple purposes but its main content is a description of the green energy goals it has. It was built to modern popular designs. A colour scheme was picked. It was also the first I designed using Tailwind CSS. Its main features a smoothly laid out pages with varieties for data.',
    featuredComponent: 'Hero Section',
    liveSite: 'https://dazzling-biscuit-b01617.netlify.app/',
  },
  {
    id: 4,
    image: BioClicker,
    url: 'bio-clicker',
    prevUrl: 'myecoapp',
    nextUrl: 'webdesignsbytom',
    title: 'Idle-Clicker game',
    github: 'https://github.com/webdesignsbytom/react-idle-clicker',
    demo: 'https://rococo-kleicha-53fa88.netlify.app/',
    icons: [Javascript, ReactIcon, Prisma, TailwindIcon],
    images: [BioCLickerPhone, BioClicker, BioClicker],
    skills: [
      { name: 'Autofilled Tweets', icon: <AiOutlineTwitter size={20} /> },
      { name: '150+ States Managed', icon: <FaServer size={20} /> },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      { name: 'Localstorage Backups', icon: <MdSdStorage size={20} /> },
      {
        name: 'Player Achievements Monitoring',
        icon: <IoIosRibbon size={20} />,
      },
      { name: 'Mutliple Scores', icon: <GrScorecard size={20} /> },
      { name: 'Purchasing Functions', icon: <FaMoneyCheckAlt size={20} /> },
      { name: 'Variable Menus', icon: <BiMenuAltRight size={20} /> },
      {
        name: 'Admin Panel with users data',
        icon: <MdAdminPanelSettings size={20} />,
      },
      { name: 'Animated canvas gameplay', icon: <GrUserAdmin size={20} /> },
    ],
    headline: 'Game design using state management and purchasing',
    desc: 'Bio-Clikcer a react based idle clicker game. Based on hugely popular phone and browser idle clicker games. This involves a huge amount of player states and is a great example of the abilities of using state in react. Furthermore rending items, achievements and buildings like they were items in an online store. The player data is all collected and saved to localstorage and server databases for using various devices. Every element on the page is subject to rerendering and has been smoothly laid out to prevent overloading issues. An animated component on the main screen has a game where you can tap on click on enemy units.',
    featuredComponent: 'Game',
    liveSite: 'https://rococo-kleicha-53fa88.netlify.app/',
  },
  {
    id: 5,
    image: WDBTMain,
    title: 'Web Designs By Tom',
    url: 'webdesignsbytom',
    prevUrl: 'bio-clicker',
    nextUrl: 'tavyepoxy',
    github: 'https://github.com/webdesignsbytom/webdesignsbytom-app',
    demo: 'https://webdesignsbytom.com',
    icons: [Javascript, ReactIcon, TailwindIcon, Expressjs, Prisma],
    images: [WDBTNav, WDBTMain, WDBTPortfolio],
    skills: [
      { name: 'Responsive Design', icon: <FaTabletAlt size={20} /> },
      { name: 'Web Design Tool', icon: <FaTools size={20} /> },
      {
        name: 'Colour Palette Builder',
        icon: <TfiLayoutSliderAlt size={20} />,
      },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      { name: 'Automated Emails', icon: <IoMdColorPalette size={20} /> },
      { name: 'Internal notifications', icon: <IoMdColorPalette size={20} /> },
      {
        name: 'Internal messaging system',
        icon: <IoMdColorPalette size={20} />,
      },
      { name: 'Admin Area', icon: <IoMdColorPalette size={20} /> },
      { name: 'Developer Area', icon: <IoMdColorPalette size={20} /> },
      { name: 'Full Data Logging', icon: <IoMdColorPalette size={20} /> },
      { name: 'Google Analytics', icon: <IoMdColorPalette size={20} /> },
    ],
    headline:
      'My personal portfolio and sales website for my software engineering skills.',
    desc: 'I design and build software for independent customers and i needed a website to advertise from. Originally just designed for employers to see my portfolio I built more user sections to practice a few skills and it slowly evolved. I created a design feature where users can select and choose from serveral design options, colour palettes and build a list of user stories. This design tool was made in the hope someone would spend 10 minutes playing with it and then want to use my business. The tool lets you save designs and event submit them as a project the user wants built. That way i already have a complete record of basic data i would need to collect. User stories, links to sites the customer wants to emulate, colour themes, navigation styles and more.',
    featuredComponent: 'Website Design Tool',
    featuredDisplay: '',
    liveSite: 'https://webdesignsbytom.com/',
  },
  {
    id: 5,
    image: TavyEpoxy,
    title: 'TavyEpoxy Furniture',
    url: 'tavyepoxy',
    prevUrl: 'webdesignsbytom',
    nextUrl: 'matched-betting-simulator',
    github: 'https://github.com/webdesignsbytom/tavy_epoxy',
    demo: 'https://strong-tulumba-d852ca.netlify.app/',
    icons: [Javascript, ReactIcon, CSS3icon, Expressjs, Prisma],
    images: [TavyepoxyPhone, TavyEpoxy, TavyEpoxy],
    skills: [
      { name: 'Responsive Gallery', icon: <FaTabletAlt size={20} /> },
      { name: '3D Design Tool', icon: <FaTools size={20} /> },
      { name: 'Image Slider on loop', icon: <TfiLayoutSliderAlt size={20} /> },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      {
        name: 'Advanced CSS colour manipulating',
        icon: <IoMdColorPalette size={20} />,
      },
    ],
    headline: 'A sales and gallery website for a local designer',
    desc: 'TavyEpoxy, or Tav-E-poxy is a business I run selling my spare artwork as tables. The website was created to display a gallery of possiblities and attract interest in similar designs from customers. The key to getting customers is to make it easy for them to compare the designs in my gallery and the materials available to make orders based on what they find attractive. To address this I have made contact forms with various basic options for quote requesting. Along with a design tool where customers can create a 3D render of the furniture dimensions and artistic patterns desired.',
    featuredComponent: '3D Design Tool',
    featuredDisplay: '',
    liveSite: 'https://strong-tulumba-d852ca.netlify.app/',
  },
];
