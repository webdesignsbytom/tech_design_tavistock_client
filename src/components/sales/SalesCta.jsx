import React from 'react';
import { Link } from 'react-router-dom';

function SalesCta() {
  return (
    <section className='relative w-full py-10 bg-gray-100 h-full md:my-28'>
      <div className='relative px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10'>
        {/* Titles */}
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-yellow-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='bd1bde-4a23-49f7-bf27-ca140852cf21'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='1' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#bd1bde-4a23-49f7-bf27-ca140852cf21)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'>Design Tool Available</span>
            </span>{' '}
          </h2>
          <article className='mb-4'>
            <p className='text-base text-gray-700 md:text-lg'>
              You can create a basic design for your website using my custom
              build tool. Pick from navigation and footer options. Choose from
              multiple buttons with a variety of effects, pick colour styles and
              swatches, create user stories for the design elements you want to
              see. This tool saves your design allowing us both to review the
              data during builds and make quick changes to your designs.
            </p>
          </article>
        </div>

        <section className='flex gap-4 mt-10'>
          <Link
            to='/design'
            className='w-full relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
          >
            <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
            <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 '></span>
            <span className='relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
              Design Tool
            </span>
          </Link>
          <Link
            to='/register'
            className='w-full relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
          >
            <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-yellow-500 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
            <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-yellow-500 rounded-md opacity-0 group-hover:opacity-100 '></span>
            <span className='relative text-yellow-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
              Sign Up
            </span>
          </Link>
        </section>
      </div>
    </section>
  );
}

export default SalesCta;
