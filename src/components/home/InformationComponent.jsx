import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Utils
import { infoBoxDataArray } from '../../utils/HomePageDataUtils';
import { businessInfo } from '../../utils/CompanyDataUtil';
// Components
import InfoBox from '../global/InfoBox';
import ButtonComponent from '../global/ButtonComponent';
// Images
import PcImage from '../../assets/images/sales/heros-expanding.png';
import ComponentTitles from '../global/ComponentTitles';

function InformationComponent() {
  const sectionRef = useRef(null);

  const [infoBoxDisplay] = useState(infoBoxDataArray);

  let navigate = useNavigate();

  useEffect(() => {
    const sectionElement = sectionRef.current;

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
  }, [infoBoxDisplay]);

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <section
      id='information'
      className='grid relative min-h-screen lg:max-h-screen lg:overflow-hidden'
    >
      {/* Background extension */}
      {/* Main content of section */}
      <div className='grid h-full w-full overflow-hidden bg-slate-300 mb-24 sm:mb-10 sm:px-6 lg:px-12'>
        <section className='grid sm:grid-cols-2 w-full h-full overflow-hidden'>
          {/* Article - left hand side */}
          <article className='grid items-center h-full w-full overflow-hidden sm:px-4 xl:px-6'>
            <div className='grid h-fit w-full overflow-hidden'>
              {/* Text */}
              <section className='grid h-fit'>
                <div className='mt-10 lg:mt-0'>
                  <ComponentTitles
                    title={'What We Do!'}
                    subtitle={'Serivce and Skills'}
                  />
                </div>

                <div className='lg:hidden px-8 py-8 my-2 lg:w-[300px]'>
                  <img
                    src={PcImage}
                    alt='PC demo'
                    className='w-full h-full object-contain'
                  />
                </div>
                <div className='px-10 pt-4 sm:px-0 lg:pr-10 sm:pt-6'>
                  <div className='grid grid-cols-rev'>
                    <div className='grid lg:items-center'>
                      <p>
                        <span className='italic font-semibold text-[18px]'>
                          {businessInfo.companyName}
                        </span>{' '}
                        builds and designs complex or beautifully simple
                        websites, phone apps, and desktop apps. With a team of
                        developers that can complete for you any Front-End or
                        Server based project.
                      </p>
                    </div>
                    <div className='hidden lg:grid lg:w-[200px] mx-4'>
                      <img
                        src={PcImage}
                        alt='PC demo'
                        className='w-full h-full object-contain'
                      />
                    </div>
                  </div>
                  <p className='pt-2 lg:pt-4'>
                    We work with various codebases to suit any development needs
                    you may have, building websites or mobile and desktop apps.
                    Using Cross-platform code for mobile apps in iOS and
                    Android.
                  </p>
                  <p className='pt-2 lg:pt-4'>
                    Our services are affordable, timely, and include product
                    monitoring and bug fixing after release.
                  </p>
                  <p className='pt-2 lg:pt-4'>
                    Specializing in apps that connect to Bluetooth or WiFi
                    devices and offer custom circuit integration and
                    development.
                  </p>
                </div>
              </section>

              {/* Cta buttons */}
              <section className='grid w-full h-fit'>
                <div className='grid grid-cols-2 px-4 sm:px-0 mt-10 gap-2 overflow-hidden'>
                  <div>
                    <ButtonComponent
                      label='Explore Demos'
                      onClick={() => navigateToPage('/portfolio')}
                      type='secondary'
                    />
                  </div>
                  <div>
                    <ButtonComponent
                      label='Contact Now'
                      onClick={() => navigateToPage('/contact')}
                      type='primary'
                    />
                  </div>
                </div>
              </section>
            </div>
          </article>

          {/* Images - right hand side */}
          <section ref={sectionRef} className='grid w-full h-full xl:px-6'>
            <div className='grid items-center w-full h-full px-2 logo__bg__1'>
              {/* Info Boxes */}
              <div
                id='infoBox-container'
                className='grid gap-2 pt-4 sm:pt-0 sm:gap-4 h-fit px-2 sm:px-4 lg:px-16'
              >
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
