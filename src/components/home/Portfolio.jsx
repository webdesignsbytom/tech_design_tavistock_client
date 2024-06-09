import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Data
import { portfolioImagesArray } from '../../utils/PortfolioDataUtils';

function Portfolio() {
  const [portfolioImages] = useState(portfolioImagesArray);
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <section
      id='portfolio-section'
      className='grid relative h-full min-h-screen lg:max-h-screen lg:overflow-hidden mt-10'
    >
      <div className='grid h-full w-full'>
        <div className='grid grid-rows-reg h-full'>
          <section className='my-8 h-fit'>
            <div className='text-center'>
              <span className='text-sm font-semibold'>Portfolio and Demos</span>
            </div>
            <h3 className='poppins_title text-4xl text-text-alt text-center'>
              Our Products
            </h3>
          </section>

          <section className='grid h-full w-[85%] mx-auto px-1'>
            <div className='grid h-fit gap-12 mt-6'>
              {portfolioImages.map((image, index) => {
                return (
                  <article key={index} className='grid overflow-hidden h-[450px]'>
                    <div className='border-2 border-black border-solid rounded-lg h-full w-full bg-pink overflow-x-hidden overflow-y-scroll'>
                        <img src={image.image} alt={image.alt} />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
