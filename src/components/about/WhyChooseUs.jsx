// WhyChooseUs.js
import React, { useEffect, useRef, useState } from 'react';
// Data
import { businessInfo } from '../../utils/CompanyDataUtil';
import { whyChooseUsItemsArray } from '../../utils/AboutPageDataUtils';

function WhyChooseUs() {
  const sectionRef = useRef(null);

  const [dataArray] = useState(whyChooseUsItemsArray)

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const handleMouseOver = () => {
      let boxes = whyChooseUsItemsArray.map((_, index) =>
        document.getElementById(`${index}_infoup_button`)
      );

      boxes.forEach((box, index) => {
        setTimeout(() => {
          box.classList.remove('hidden-container');
          box.classList.add('animate-info-tabs-up');
        }, index * 300);
      });
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleMouseOver();
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (sectionElement) {
      observer.observe(sectionElement);
      sectionElement.addEventListener('mouseover', handleMouseOver);
      sectionElement.addEventListener('touchstart', handleMouseOver);

      // Cleanup function to remove the event listener
      return () => {
        sectionElement.removeEventListener('mouseover', handleMouseOver);
        sectionElement.removeEventListener('touchstart', handleMouseOver);
        observer.disconnect();
      };
    }
  }, [dataArray]);

  return (
    <div id='why-choose-us' className='container mb-6 px-6 mx-auto lg:mt-32 lg:mb-24'>
      <section className='text-gray-800 dark:text-gray-400'>
        <h2 className='text-3xl font-bold mb-12 text-center text-text-alt poppins_title'>
          Why {businessInfo.companyName} is for you!
        </h2>

        <div className='flex flex-wrap items-center'>
          <section className='grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6'>
            <div
              className='relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              style={{ backgroundPosition: '50%' }}
            >
              <img
                src='https://mdbootstrap.com/img/new/textures/full/98.jpg'
                className='w-full max-h-[500px]'
                alt='design classics'
              />
              <div
                className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              >
                <article className='flex justify-center items-center h-full'>
                  <div className='px-6 py-12 md:px-12 text-white text-center'>
                    <h3 className='text-2xl uppercase font-bold mb-6'>
                      Years of experience delivering quality{' '}
                    </h3>
                    <p style={{ color: 'hsl(210, 12%, 80%)' }}>
                      Personally I have worked for years in the engineering and
                      technology fields and bring a wealth of knowledge, practical thinking
                      and solutions to problems. My goals have always been to
                      produce excellent work that can be used to represent my
                      skills. Teaming up with a number of skilled individuals
                      from around the world only makes this company more useful
                      to you.
                    </p>
                  </div>
                </article>
              </div>
              <div className='relative overflow-hidden bg-no-repeat bg-cover'>
                <div
                  className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                ></div>
              </div>
            </div>
          </section>

          <section ref={sectionRef} className='grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6'>
            {dataArray.map((item, index) => (
              <div key={index} id={index + '_infoup_button'} className='flex mb-6 infoBox hidden-container'>
                <div className='shrink-0'>
                  <div
                    className='p-4 rounded-md shadow-lg'
                    style={{ backgroundColor: 'hsl(204, 30%, 20%)' }}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className='grow ml-4'>
                  <p className='font-bold mb-1'>{item.title}</p>
                  <p className='text-gray-500'>{item.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;
