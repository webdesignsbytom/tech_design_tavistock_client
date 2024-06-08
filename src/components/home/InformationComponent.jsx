import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Utils
import { infoBoxDataArray } from '../../utils/HomePageData';
// Components
import InfoBox from '../global/InfoBox';

function InformationComponent() {
  const sectionRef = useRef(null);

  const [infoBoxDisplay] = useState(infoBoxDataArray);

  let navigate = useNavigate();

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      const handleMouseOver = () => {

        let boxes = infoBoxDisplay.map((_, index) => 
          document.getElementById(`${index}_infoBox`)
        );

        boxes.forEach((box, index) => {
          setTimeout(() => {
            box.classList.remove('hidden-container');
            box.classList.add('animate-info-tabs');
          }, index * 300); // Staggering by 1 second
        });
      };

      sectionElement.addEventListener('mouseover', handleMouseOver);
      sectionElement.addEventListener('touchstart', handleMouseOver);

      // Cleanup function to remove the event listener
      return () => {
        sectionElement.removeEventListener('mouseover', handleMouseOver);
        sectionElement.removeEventListener('touchstart', handleMouseOver);

      };
    }
  }, [infoBoxDisplay]);

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <section
      id='information'
      ref={sectionRef}
      className='grid relative min-h-screen h-fit sm:h-screen w-full overflow-hidden'
    >
      {/* Background extension */}
      {/* Main content of section */}
      <div className='grid h-full w-full overflow-hidden bg-slate-300 sm:px-16 sm:py-16'>
        <section className='grid sm:grid-cols-2 w-full h-full overflow-hidden'>
          {/* Article - left hand side */}
          <article className='grid items-center h-full w-full overflow-hidden sm:px-8 sm:py-6'>
            <div className='grid h-fit w-full overflow-hidden'>
              {/* Text */}
              <section className='grid grid-rows-reg h-fit'>
                <div className='grid'>
                  <h3 className='text-4xl russo-one-regular text-center'>What We Do!</h3>
                </div>
                <div className='px-10 pt-4 sm:px-0 sm:pr-10 sm:pt-6'>
                  <p>
                    <span className='italic font-semibold text-[18px]'>
                      Tech Design by Tom
                    </span>{' '}
                    builds and designs complex or beautifully simple websites,
                    phone apps, and desktop apps. With a team of developers that
                    can complete for you any Front-End or Server based project.
                  </p>
                  <p className='pt-2'>
                    We work with various codebases to suit any development needs
                    you may have, building websites or mobile and desktop apps.
                    Using Cross-platform code for mobile apps in iOS and
                    Android.
                  </p>
                  <p className='pt-2'>
                    Our services are affordable, timely, and include product
                    monitoring and bug fixing after release.
                  </p>
                  <p className='pt-2'>
                    Specializing in apps that connect to Bluetooth or WiFi
                    devices and offer custom circuit integration and
                    development.
                  </p>
                </div>
              </section>

              {/* Cta buttons */}
              <section className='grid h-fit'>
                <div className='grid grid-cols-2 px-4 sm:px-0 pt-8 gap-2 overflow-hidden russo-one-regular'>
                  <div>
                    <button className='w-full h-fit px-4 py-2 font-semibold bg-white text-alt-colour border-2 border-solid border-alt-colour rounded-lg hover:bg-alt-colour hover:text-white duration-300 shadow-lg hover:shadow-2xl'>
                      See More
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => navigateToPage('/contact')}
                      className='w-full h-fit px-4 py-2 font-semibold bg-alt-colour text-white border-2 border-solid border-alt-colour rounded-lg hover:text-alt-colour hover:bg-white duration-300 shadow-lg hover:shadow-2xl'
                    >
                      Contact Now
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </article>

          {/* Images - right hand side */}
          <section className='grid w-full h-full overflow-hidden'>
            <div className='grid items-center w-full h-full px-2 py-2 logo__bg__1 sm:overflow-hidden'>
              {/* Info Boxes */}
              <div id='infoBox-container' className='grid gap-2 pt-4 sm:pt-0 sm:gap-4 h-fit px-2 sm:px-16'>
                {infoBoxDisplay.map((data, index) => {
                  return <InfoBox key={index} data={data} index={index} />;
                })}
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default InformationComponent;
