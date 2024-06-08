import React from 'react';
import { useNavigate } from 'react-router-dom';
// Data
import {
  basicListItems,
  shopListItems,
  fullstackListItems,
} from '../../utils/SalesDataUtils';
// Icons
import DisplayCard from '../global/DisplayCard';

function PurchaseOptions({ myRef }) {

  return (
    <section ref={myRef} className='relative w-full h-full'>
      <div className='absolute hidden w-full bg-gray-100 lg:block h-96' />
      <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        {/* Titles */}
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block w-full'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 right-0 z-0 w-32 -mt-8 -m2-2 text-green-600 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
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
              <span className='relative'>Affordable</span>
            </span>{' '}
            for everyone
          </h2>
          <p className='text-base text-gray-700 md:text-lg px-2'>
            High quality web design by Tom and his team. New business price
            breaks available across a range of web products. All sites are pure
            code giving us 100% control over every aspect.
          </p>
        </div>

        <div className='grid max-w-screen-md gap-10 md:grid-cols-3 md:max-w-none sm:mx-auto'>
          {/* First container */}
          <DisplayCard
            title='Basic Website'
            price='450'
            listItems={basicListItems}
            buttonId='basic'
            buttonColor='bg-purple-600 hover:bg-purple-700'
          />
          <DisplayCard
            title='Online Shop'
            price='750'
            listItems={shopListItems}
            buttonId='shop'
            buttonColor='bg-yellow-500 hover:bg-yellow-700'
          />
          <DisplayCard
            title='Fullstack Project'
            price='1200'
            listItems={fullstackListItems}
            buttonId='fullstack'
            buttonColor='bg-green-600 hover:bg-green-700'
          />
        </div>
      </div>
    </section>
  );
}

export default PurchaseOptions;
