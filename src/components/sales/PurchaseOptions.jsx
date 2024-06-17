import React from 'react';
// Data
import {
  websiteDataItem,
  appDataItem,
  circuitDataItem,
} from '../../utils/SalesDataUtils';
// Icons
import DisplayCard from '../global/DisplayCard';

function PurchaseOptions() {
  return (
    <section  className='relative w-full h-full'>
      <div className='absolute hidden w-full bg-gray-100 lg:block h-96' />
      <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        {/* Titles */}
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg poppins_title text-purple-main text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto'>
            <span className='relative'>Affordable <br /></span> for everyone
          </h2>
          <p className='text-base text-text-main md:text-lg px-2 poppins_text'>
            High quality web design by Tom and his team. New business price
            breaks available across a range of web products. All sites are pure
            code giving us 100% control over every aspect.
          </p>
        </div>

        <div className='grid max-w-screen-md gap-10 md:grid-cols-3 md:max-w-none sm:mx-auto'>
          {/* First container */}
          <DisplayCard
            data={websiteDataItem}
            buttonId='web'
            buttonColor='bg-purple-600 hover:bg-purple-700'
          />
          <DisplayCard
            data={appDataItem}
            buttonId='app'
            buttonColor='bg-yellow-500 hover:bg-yellow-700'
          />
          <DisplayCard
            data={circuitDataItem}
            buttonId='circuit'
            buttonColor='bg-green-600 hover:bg-green-700'
          />
        </div>
      </div>
    </section>
  );
}

export default PurchaseOptions;
