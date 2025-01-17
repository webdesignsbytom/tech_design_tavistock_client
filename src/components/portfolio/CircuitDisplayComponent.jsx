import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import ComponentTitles from '../global/ComponentTitles';
// Data
import { circuitDisplayItemData } from '../../utils/PortfolioDataUtils';

function CircuitDisplayComponent() {
  const [displayItem] = useState(circuitDisplayItemData);
  const navigate = useNavigate();

  const handleImageClick = (image, index) => {
    navigate(`/image-display/${index}`, { state: { image } });
  };

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
                  loading='lazy'
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
            <div className='mb-8 px-6 py-4 '>
              <div className='outline outline-1 outline-black rounded bg-white p-1 shadow-lg'>
                <video width='100%' controls muted loading='lazy'>
                  <source src={displayItem.video} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* Images in cols */}
            <section className='grid overflow-x-scroll'>
              <div className='grid grid-flow-col gap-4 px-4 pb-4 py-1'>
                {displayItem.images.map((image, index) => (
                  <div
                    key={index}
                    className='grid items-center min-h-[100px] min-w-[200px]'
                  >
                    <div className='outline outline-1 outline-black rounded bg-white p-1 shadow-lg'>
                      <img
                        key={index}
                        src={image}
                        onClick={() => handleImageClick(image, index)}
                        alt={`Circuit ${index + 1}`}
                        loading='lazy'
                        className='w-full h-full object-contain rounded'
                      />
                    </div>
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
