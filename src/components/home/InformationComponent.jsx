import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Utils
import { infoBoxDataArray } from '../../util/HomePageData';
// Components
import InfoBox from '../global/InfoBox';

function InformationComponent() {
  const [infoBoxDisplay] = useState(infoBoxDataArray);

  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <section
      id='information'
      className='grid relative h-screen w-full overflow-hidden'
    >
      {/* Background extension */}
      {/* Main content of section */}
      <div className='grid h-full w-full overflow-hidden bg-slate-300 px-16 py-16'>
        <section className='grid grid-cols-2 w-full h-full overflow-hidden'>
          {/* Article - left hand side */}
          <article className='grid items-center h-full w-full overflow-hidden px-8 py-6'>
            <div className='grid h-fit w-full overflow-hidden'>
              {/* Text */}
              <section className='grid grid-rows-reg h-fit'>
                <div className='grid'>
                  <h3 className='text-4xl russo-one-regular'>What We Do!</h3>
                </div>
                <div className='pr-10 pt-6'>
                  <p>
                    <span className='italic font-semibold text-[18px]'>
                      Tech Design by Tom
                    </span>{' '}
                    builds and designs complex or beautifully simple websites,
                    phone apps, and desktop apps.
                  </p>
                  <p className='pt-2'>
                    We work with various codebases to suit any development needs
                    you may have, building websites or mobile and desktop apps.
                    Using Cross-platform code for mobile apps in iOS and
                    Android.
                  </p>
                  <p>
                    Our services are affordable, timely, and include product
                    monitoring and bug fixing after release.
                  </p>
                  <p>
                    Specializing in apps that connect to Bluetooth or WiFi
                    devices and offer custom circuit integration and
                    development.
                  </p>
                </div>
              </section>

              {/* Cta buttons */}
              <section className='grid h-fit'>
                <div className='grid grid-cols-2 pt-8 gap-4 overflow-hidden russo-one-regular'>
                  <div>
                    <button className='w-full h-fit px-4 py-2 font-semibold bg-white text-alt-colour border-2 border-solid border-alt-colour rounded-lg hover:bg-alt-colour hover:text-white duration-300'>
                      See More
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => navigateToPage('/contact')}
                      className='w-full h-fit px-4 py-2 font-semibold bg-alt-colour text-white border-2 border-solid border-alt-colour rounded-lg hover:text-alt-colour hover:bg-white duration-300'
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </article>

          {/* Images - right hand side */}
          <section className='grid w-full h-full overflow-hidden'>
            <div className='grid items-center w-full h-full px-2 py-2 logo__bg__1 overflow-hidden'>
              {/* Info Boxes */}
              <div className='grid gap-4 h-fit px-16'>
                {infoBoxDisplay.map((data, index) => {
                  return <InfoBox key={index} data={data} />;
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
