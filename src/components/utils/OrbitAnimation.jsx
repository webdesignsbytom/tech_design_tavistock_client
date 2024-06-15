import React from 'react';
import GitHubIcon from '../../assets/svg/github-black.svg';
import HTML5Icon from '../../assets/svg/html5.svg';
import NodeIcon from '../../assets/svg/nodejs.svg';
import Javascript from '../../assets/svg/javascript.svg';
import ExpressJS from '../../assets/svg/expressjs.svg';
import ReactJSIcon from '../../assets/svg/reactjs-icon.svg';
import TailwindIcon from '../../assets/svg/tailwindcss-icon.svg';
import Prisma from '../../assets/svg/file_type_light_prisma.svg';

function OrbitAnimation() {
  return (
    <div className='orbit__container'>
      <div className='boundry__container'>
        <div className='circle'></div>
        <div className='satellite satellite1'>
          <img loading='lazy' src={ReactJSIcon} alt='react icon' />
        </div>
        <div className='satellite satellite2'>
          <img loading='lazy' src={GitHubIcon} alt='github icon' />
        </div>
        <div className='satellite satellite3'>
          <img loading='lazy' src={HTML5Icon} alt='html5 icon' />
        </div>
        <div className='satellite satellite4'>
          <img loading='lazy' src={NodeIcon} alt='node js icon' />
        </div>
        <div className='satellite satellite5'>
          <img loading='lazy' src={ExpressJS} alt='node js icon' />
        </div>
        <div className='satellite satellite6'>
          <img loading='lazy' src={TailwindIcon} alt='node js icon' />
        </div>
        <div className='satellite satellite7'>
          <img loading='lazy' src={Prisma} alt='node js icon' />
        </div>
        <div className='satellite satellite8'>
          <img loading='lazy' src={Javascript} alt='node js icon' />
        </div>
      </div>
    </div>
  );
}

export default OrbitAnimation;
