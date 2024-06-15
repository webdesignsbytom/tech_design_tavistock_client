import React, { useState } from 'react';
// Components
import ComponentTitles from '../global/ComponentTitles';
// Data
import { circuitDisplayItemData } from '../../utils/PortfolioDataUtils';

function CircuitDisplayComponent() {
  const [displayItem] = useState(circuitDisplayItemData);
  
  return (
    <section className='grid w-full h-full lg:h-screen bg-gray-300'>
      <div className='grid px-4 lg:grid-cols-2 lg:w-[90%] lg:gap-8 lg:h-[90%] lg:my-auto lg:mx-auto'>
        <section className='grid w-full h-full'>
          <div className='grid items-center my-auto h-fit lg:px-6'>
            <section className='text-center py-8'>
              <ComponentTitles
                title={'Custom Builds'}
                subtitle={'Phone using robot'}
              />
            </section>
            <section className='grid md:hidden px-2 mb-10 h-fit justify-center items-center'>
              <div className='grid'>
                <img
                  src={displayItem.mainImage}
                  alt='Circuit main'
                  className='w-full h-full object-cover'
                />
              </div>
            </section>
            <article>
              <div className='grid gap-4 px-4'>
                {displayItem.desc.map((desc, index) => {
                  return (
                    <div key={index}>
                      <p className='poppins-text text-text-dark'>{desc}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </section>

        <section className='grid w-full h-full mt-10 lg:mt-0 pb-20 lg:pb-0'>
          <div className='grid h-fit my-auto'>
            {/* Video player */}
            <div className='mb-8 p-6'>
              <video width='100%' controls muted>
                <source src={displayItem.video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Images in cols */}
            <section className='grid overflow-x-scroll'>
              <div className='grid grid-flow-col gap-4 px-4 pb-4'>
                {displayItem.images.map((image, index) => (
                  <div className='grid h-[100px] w-[200px]'>
                    <img
                      key={index}
                      src={image}
                      alt={`Circuit ${index + 1}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}

export default CircuitDisplayComponent;
