// PortfolioItem.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Data
import { portfolioDataArray } from '../../utils/PortfolioDataUtils';
import Navbar from '../../components/nav/Navbar';
import LaptopDevice from '../../components/devices/LaptopDevice';
import MonitorDevices from '../../components/devices/MonitorDevices';
import PhoneDevices from '../../components/devices/PhoneDevices';
import ButtonComponent from '../../components/global/ButtonComponent';

function PortfolioItemPage() {
  const { itemId } = useParams();
  const [portfolioItem, setPortfolioItem] = useState(null);

  useEffect(() => {
    const item = portfolioDataArray.find((item) => item.url === itemId);
    setPortfolioItem(item);
  }, [itemId]);

  if (!portfolioItem) return <div>Loading...</div>;

  return (
    <div className='bg-main-colour min-h-screen grid lg:overflow-hidden'>
      <div className='grid lg:grid-rows-reg lg:overflow-hidden'>
        {/* Nav */}
        <Navbar />
        {/* MAIN PAGE */}
        <main className='grid lg:grid-cols-2 lg:overflow-hidden'>
          {/* Left side */}
          <div className='grid h-full lg:overflow-hidden'>
            <div className='text-2xl font-bold text-center mt-6 '>
              <h1 className='text-text-alt poppins_title'>
                {portfolioItem.title}
              </h1>
            </div>

            <div className='w-[90%] grid h-full mx-auto lg:overflow-hidden'>
              <section className='grid h-fit'>
                <div className='mb-2 md:my-4 poppins_title'>
                  <span className='font-bold'>App Purpose:</span>{' '}
                  {portfolioItem.headline}
                </div>

                {/* LAPTOP */}
                <section className='grid md:hidden px-2 my-4 h-fit justify-center items-center'>
                  <LaptopDevice portfolioItem={portfolioItem} />
                </section>

                <article className=''>
                  <div className='p-2'>
                    <p className='poppins_text'>{portfolioItem.desc}</p>
                  </div>
                </article>
              </section>

              <div className='grid w-full h-full mt-6 lg:mt-0 mb-4 lg:mb-0'>
                <section className='grid outline-2 h-fit bg-alt-colour outline-black outline rounded p-1 w-full'>
                  <div className=''>
                    <div className='text-center text-xl font-semibold mb-2'>
                      <h3 className='text-text-alt poppins_title'>
                        Skills Used
                      </h3>
                    </div>

                    <article className='outline-2 outline-black bg-gray-50 outline rounded p-1 shadow-[inset_-12px_-8px_40px_#46464620]'>
                      <ul className='p-1 grid gap-1 dark:bg-gray-800 justify-center'>
                        {portfolioItem.skills.map((skill, index) => {
                          return (
                            <li className='grid' key={index}>
                              <div className='flex gap-2 poppins_text lg:gap-6 items-center'>
                                <h4>{skill.icon}</h4>
                                <h4>{skill.name}</h4>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </article>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Right side - image container */}
          <section className='grid min-h-screen lg:min-h-full mt-24 lg:mt-0 lg:h-full'>
            <div className='grid grid-rows-a1a w-full h-full lg:py-4'>
              
              <div className='grid justify-center lg:justify-end h-fit'>
                <ul className='flex outline outline-2 gap-1 outline-gray-300 rounded-full w-fit items-center m-1 py-1 px-4'>
                  {portfolioItem.icons.map((icon, index) => {
                    return (
                      <li key={index} className=''>
                        <img className='w-8' loading='lazy' src={icon} alt='icon' />
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Display container small */}
              <section className='grid mt-4 lg:hidden  lg:pr-24'>
                {/* MONITOR */}
                <section className='grid w-full justify-center md:justify-start grid-rows-aa px-2'>
                  <MonitorDevices portfolioItem={portfolioItem} />
                </section>

                {/* LAPTOP */}
                <section className='grid -mt-32 sm:ml-52 h-fit px-4 justify-center items-center'>
                  <LaptopDevice portfolioItem={portfolioItem} />
                </section>

                {/* PHONE */}
                <section className='grid -mt-44 items-center justify-center'>
                  <PhoneDevices portfolioItem={portfolioItem} />
                </section>
              </section>

              {/* Display container large */}
              <section className='hidden lg:grid relative'>
                {/* PHONE */}
                <section className='grid z-30 absolute bottom-2 left-4 lg:mb-10 lg:ml-10 items-center justify-center'>
                  <PhoneDevices portfolioItem={portfolioItem} />
                </section>

                {/* LAPTOP */}
                <section className='grid grid-rows-ten-one h-fit justify-center items-center absolute z-20 translate-y-2/4 lg:mt-24 ml-20'>
                  <LaptopDevice portfolioItem={portfolioItem} />
                </section>

                {/* MONITOR */}
                <section className='grid grid-rows-aa absolute top-1 right-1'>
                  <MonitorDevices portfolioItem={portfolioItem} />
                </section>
              </section>

              <section className='md:flex justify-between items-end py-2 border-t-2 border-solid border-black'>
                <article className='pl-3'>
                  <h6 className='flex'>
                    PHONE - <span className='flex text-gray-800'>TABLET</span> -
                    LAPTOP - <span className='flex text-gray-800'>MONITOR</span>
                  </h6>
                  <h3>Fully Responsive Design</h3>
                </article>
                <div className='flex items-center !text-center px-4 md:px-0 h-full md:pr-3'>
                  <ButtonComponent
                    label='Visit Live Site'
                    href={portfolioItem.demoUrl} // The URL you want to open in a new tab
                    type='primary'
                  />
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default PortfolioItemPage;
