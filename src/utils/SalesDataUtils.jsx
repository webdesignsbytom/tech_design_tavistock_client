// Icons
import ComputerIcon from '../assets/images/device/computer-app-design-option-icon.svg';
import MobileIcon from '../assets/images/device/mobile-app-design-option-icon.svg';
import WebsiteIcon from '../assets/images/device/website-design-option-icon.svg';
import CircuitBoardIcon from '../assets/images/device/circuit-board-design-option-icon.svg';

export const initAlert = { status: '', content: '' };

export const servicesDataArray = [
  {
    title: 'UI/UX Design',
    borderColor: '#1f2937',
    items: [
      'Wireframe and figma designs using the latest design tools',
      'All devices conformed to style',
      'Faster streamlined services',
      'User friendly layouts',
      'Testing and collecting user experience data',
      'Colour and style options. Hue matching and pallet building tools.',
      'Root set styles for speedy changes througout project.',
    ],
  },
  {
    title: 'Software/App Development',
    borderColor: '#ecc94b',
    items: [
      'Fullstack design and development',
      'Database and user services.',
      'Game and animation Development.',
      'Reactive and mobile friendly or mobile first design',
      'Social medias supporting post/sharing dynamic',
      'Video, webcam and chat communication services',
      'Smart home and wireless connectivity',
      'Restful API services',
    ],
  },
  {
    title: 'Other Skills',
    borderColor: '#38a169',
    items: [
      'Arduino/Pi development',
      'Circuit design and development',
      'Customer relations',
      'CI/CD development',
      'Documentation and auditing',
      'Mechanical maintainance',
      '3D printer models',
    ],
  },
];

export const salesAppTypes = [
  {
    label: 'Web',
    name: 'web',
    image: WebsiteIcon,
    content: {
      para1:
        'Our top-of-the-line websites are designed to elevate your online presence. We specialize in creating dynamic, responsive, and visually stunning websites that cater to your unique needs. Whether you need an e-commerce platform, a portfolio site, or a corporate web presence, our team ensures your site is user-friendly, fast, and optimized for all devices. With our expertise, your website will not only look great but also drive engagement and conversions.',
      para2:
        "Leveraging the latest web technologies, we build sites that are secure, scalable, and easy to manage. Our comprehensive approach includes SEO optimization, ensuring your site ranks well on search engines and attracts the right audience. Trust us to deliver a digital experience that reflects your brand's excellence and sets you apart from the competition",
    },
    services: [
      'High SEO score',
      'User friendly layouts',
      'Reactive and mobile friendly or mobile first design',
      'Wireframe and Figma designs',
      'All devices conformed to style',
      'Testing and collecting user experience data',
      'Colour and style options. Hue matching and palette building tools',
      'Fullstack design and development',
      'Social media supporting post/sharing dynamic',
      'Database and user services',
      'Game and animation Development',
      'Video, webcam and chat communication services',
      'Smart home and wireless connectivity',
      'Restful API services',
      'Hosting from £3.99 pm',
      '3 Months free testing',
      'SSL Certificates',
      'Admin area and api updates to site',
    ],
  },
  {
    label: 'App',
    name: 'app',
    image: MobileIcon,
    content: {
      para1:
        'Our cutting-edge mobile apps are designed to keep you connected and engaged on the go. Specializing in Bluetooth and WiFi capabilities, our apps offer seamless integration with various devices, ensuring a smooth and intuitive user experience. Whether you need an app for business, entertainment, or utility purposes, our team can bring your vision to life with robust functionality and a sleek interface.',
      para2:
        'We pride ourselves on creating apps that are not only functional but also highly user-friendly. With a focus on performance and reliability, our apps are built to handle high traffic and provide a glitch-free experience. Let us help you create a mobile app that stands out in the crowded marketplace and keeps your users coming back for more.',
    },
    services: [
      'High SEO score',
      'User friendly layouts',
      'Wireframe and Figma designs',
      'All devices conformed to style',
      'Testing and collecting user experience data',
      'Cross platform codebase',
      'Fullstack design and development',
      'Database and user services',
      'Game and animation Development',
      'Social media supporting post/sharing dynamic',
      'Video, webcam and chat communication services',
      'Smart home and wireless connectivity',
      'Individual product pages',
      'Stripe, Paypal or Visa payments',
      'Admin area and api updates to site',
    ],
  },
  {
    label: 'Software',
    name: 'software',
    image: ComputerIcon,
    content: {
      para1:
        'Unlock the full potential of your desktop environment with our expertly crafted PC software solutions. Utilizing the power of C# and Python, we develop robust, high-performance applications tailored to your specific needs. Whether you require enterprise-grade software, custom utilities, or advanced data processing tools, our solutions are designed to enhance productivity and streamline workflows.',
      para2:
        'Our team of skilled developers combines extensive experience with the latest industry standards to deliver software that is not only reliable but also easy to use and maintain. We focus on creating intuitive interfaces and ensuring seamless integration with your existing systems. Trust us to deliver PC software that empowers your business and drives innovation.',
    },
    services: [
      'Wireframe and Figma',
      'C# and Python',
      'Windows PC applications',
      'Faster streamlined services',
      'User friendly layouts',
      'SQL Databases',
      'Database and user services',
      'Game and animation Development',
      'Social media supporting post/sharing dynamic',
      'Smart home and wireless connectivity',
      'Control devices and circuitry',
    ],
  },
  {
    label: 'Tech',
    name: 'tech',
    image: CircuitBoardIcon,
    content: {
      para1:
        "Explore the future of technology with our advanced circuit board, Arduino, and Pi solutions that communicate seamlessly with apps. Perfect for IoT projects, automation systems, and innovative tech solutions, our hardware expertise ensures reliable and efficient performance. Whether you're developing a prototype or a full-scale product, we provide the tools and support to bring your ideas to life.",
      para2:
        "Our team excels in integrating hardware with software, creating cohesive systems that are easy to manage and expand. With our focus on cutting-edge technology and user-centric design, we help you build powerful solutions that are both practical and innovative. Trust us to deliver hardware solutions that enhance your project's capabilities and open up new possibilities.",
    },
    services: [
      '3D printer models',
      'Custom circuit boards',
      'Bluetooth and Wifi connectivity',
      'Smart home intergration',
      'CE certified products',
      'Arduino/Pi development',
      'Circuit board can communicate via wifi, sim card or bluetooth',
      'Circuit design and development',
      'Documentation and auditing',
      'Fully customized components',
    ],
  },
];

export const websiteDataItem = {
  title: 'WEBSITE',
  basicListItems: [
    { text: `Stylish and modern` },
    { text: `Personal, business or shop` },
    { text: `Interactive web animations` },
    { text: `User and database services` },
    { text: `3 Months free testing` },
    { text: `SSL Certificates` },
  ],
};

export const appDataItem = {
  title: 'APP',
  basicListItems: [
    { text: `Apple and Andriod` },
    { text: `Cross platform codebase` },
    { text: `In app payments` },
    { text: `In app Advertising` },
    { text: `User and database services` },
    { text: `Games and animations` },
  ],
};

export const circuitDataItem = {
  title: 'TECH',
  basicListItems: [
    { text: `Wifi and bluetooth` },
    { text: `Custom circuit design` },
    { text: `CE certified` },
    { text: `Sensors and data analysis` },
    { text: `Moving parts and motors` },
    { text: `USB connection and updates` },
  ],
};

export const pricingTableData = [
  {
    title: 'Email address',
    basicSite: {
      available: true,
      amount: 'infinite',
    },
    basicShop: {
      available: true,
      amount: 'infinite',
    },
    fullstack: {
      available: true,
      amount: 'infinite',
    },
  },
  {
    title: 'Contact Form',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: 'Social Media Interaction',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: 'Google Maps',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: 'Cookies and Privacy Bar',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: 'Home Page',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: 'Reviews',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: '3 Months Testing',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  // Basic shop +
  {
    title: 'Users',
    basicSite: {
      available: false,
    },
    basicShop: {
      available: true,
      amount: 'infinite',
    },
    fullstack: {
      available: true,
      amount: 'infinite',
    },
  },
  {
    title: 'Product Pages',
    basicSite: {
      available: false,
    },
    basicShop: {
      available: true,
      amount: 100,
    },
    fullstack: {
      available: true,
      amount: 'infinite',
    },
  },
  {
    title: 'Analytics',
    basicSite: {
      available: false,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
];
