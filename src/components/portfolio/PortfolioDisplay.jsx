import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Utils
import { portfolioDataArray } from '../../utils/PortfolioDataUtils';

function PortfolioDisplay({ portfolioDisplayRef }) {
  const [portfolioData] = useState(portfolioDataArray)

  const navigate = useNavigate();

  const displayInfo = (item) => {
    navigate(`/portfolio-item/${item.url}`, {
      replace: false,
    });
  };

  return (
    <section
      id='portfolio-display'
      ref={portfolioDisplayRef}
      className='grid lg:grid-rows-reg py-10 dark:text-gray-400'
    >
      <section className='text-center mt-8 mb-4'>
        <h5 className='font-semibold'>Recent Work</h5>
        <h2 className='text-3xl font-bold text-text-alt poppins_title'>Portfolio</h2>
      </section>


      <section className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center md:mx-2 p-4 lg:mx-8 my-auto py-2'>
        {portfolioData.map((item, index) => {
          return (
            <article key={index} className='bg-gray-200 dark:text-gray-700 group rounded-xl text-center p-4 grid gap-2 hover:outline hover:outline-4 hover:outline-black dark:hover:outline-white hover:bg-gray-900 cursor-pointer'>
            <h3 className='mb-2 group-hover:text-white text-xl font-semibold'>
              {item.title}
            </h3>
        
            <section className='grid gap-2'>
              <div className='relative'>
                <img
                  className='w-full outline-2 outline-gray-900 group-hover:outline-white outline rounded-md lg:min-h-[180px] object-fill'
                  src={item.image}
                  onClick={() => displayInfo(item)}
                  alt='portfolio item'
                  loading='lazy'
                />
        
                <div className='flex absolute top-2 right-2 py-1 px-2 bg-transparent-white rounded-full'>
                  {item.icons.map((icon, index) => {
                    return (
                      <img loading='lazy' className='w-6 max-w-6' key={index} src={icon} alt='icon' />
                    );
                  })}
                </div>
              </div>
              <section className='text-left mx-1'>
                <p className='leading-5 group-hover:text-white'>
                  <span className='font-semibold'>Purpose:</span> {item.headline}
                </p>
              </section>
              <div className='flex gap-4 mt-2'>
                <a
                  href={item.github}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Go to GitHub code repository'
                  className='bg-gray-900 font-semibold grid justify-center p-2 text-purple-600 text-sm leading-snug uppercase rounded shadow-md hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-xl outline-2 outline transition duration-150 ease-in-out w-full items-center hover:bg-slate-200 group-hover:outline-purple-600'
                >
                  Github
                </a>
                <a
                  href={item.demoUrl}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Open live demo of site'
                  className='bg-gray-900 font-semibold grid justify-center p-2 text-yellow-500 text-sm leading-snug uppercase rounded shadow-md hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-xl transition duration-150 ease-in-out w-full items-center hover:bg-slate-200 outline-2 outline group-hover:outline-yellow-500'
                >
                  Live Demo
                </a>
                <button
                  onClick={() => displayInfo(item)}
                  aria-label='See more info'
                  className='bg-gray-900 grid font-semibold justify-center p-2 text-green-600 text-sm leading-snug uppercase rounded shadow-md hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-xl transition duration-150 ease-in-out w-full items-center hover:bg-slate-200 outline-2 outline group-hover:outline-green-600'
                >
                  More Info
                </button>
              </div>
            </section>
          </article>
          );
        })}
      </section>
    </section>
  );
}

export default PortfolioDisplay;
