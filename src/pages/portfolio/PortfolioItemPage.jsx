// PortfolioItem.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// Data
import { portfolioDataArray } from '../../utils/PortfolioDataUtils';
import Navbar from '../../components/nav/Navbar';
import LaptopDevice from '../../components/devices/LaptopDevice';

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
          <div className='h-full'>
            <div className='text-2xl font-bold text-center my-4'>
              <h1 className='text-text-alt poppins_title'>
                {portfolioItem.title}
              </h1>
            </div>

            <div className='w-[90%] mx-auto'>
              <div className='mb-2 poppins_text'>
                <span className='font-bold'>App Purpose:</span>{' '}
                {portfolioItem.headline}
              </div>

              {/* LAPTOP */}
              <section className='grid md:hidden my-4 h-fit justify-center items-center'>
                <LaptopDevice portfolioItem={portfolioItem} />
              </section>

              <article className=''>
                <div className='p-2'>
                  <p className='poppins_text'>{portfolioItem.desc}</p>
                </div>
              </article>

              <section className='outline-2 bg-main-colour mt-5 lg:mt-1 outline-black outline rounded p-1 w-full'>
                <div className=''>
                  <div className='text-center text-xl font-semibold mb-2'>
                    <h3 className='text-text-alt poppins_title'>Skills Used</h3>
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

          {/* Right side - image container */}
          <section className='grid h-screen mt-10 lg:mt-0 lg:h-full grid-rows-a1a'>
            <div className='grid justify-end h-fit'>
              <ul className='flex outline outline-2 outline-gray-300 rounded-full w-fit items-center m-1 py-1 px-4'>
                {portfolioItem.icons.map((icon, index) => {
                  return (
                    <li key={index} className=''>
                      <img className='w-8' src={icon} alt='icon' />
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Display container small */}
            <section className='grid mt-10 lg:hidden'>
              {/* MONITOR */}
              <section className='grid w-full justify-center grid-rows-aa px-2'>
                <div className='grid pt-2 max-w-[400px] max-h-[290px] pr-2 pl-2 grid-rows-rev bg-black rounded-lg border-2 border-solid border-gray-600'>
                  <div className='bg-black rounded border-2 overflow-hidden border-solid border-gray-600'>
                    <img
                      className='w-full h-full'
                      src={portfolioItem.images[2]}
                      alt='phone display'
                    />
                  </div>
                  <div className='grid grid-flow-col items-center py-1 pr-4 gap-2 justify-end'>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                  </div>
                </div>
              </section>

              {/* LAPTOP */}
              <section className='grid grid-rows-ten-one -mt-32 h-fit px-4 justify-center items-center'>
                <div className='grid items-center justify-center'>
                  <div className='grid p-1 pt-3 bg-black rounded-tr-lg rounded-tl-lg border-2 border-solid border-gray-600 max-w-[300px]'>
                    <div className='border-2 border-solid h-full border-gray-600 overflow-hidden bg-black'>
                      <img
                        className='h-full w-full'
                        src={portfolioItem.images[1]}
                        alt='laptop display'
                      />
                    </div>
                  </div>
                </div>
                <div className='grid min-h-[15px] items-center grid-cols-reg pl-8 rounded-tl-sm rounded-tr-sm rounded-bl-lg rounded-br-lg bg-black border-2 border-solid border-gray-600'>
                  <div className='grid grid-flow-col gap-2'>
                    <div className='h-[10px] w-[10px] border-2 border-solid border-gray-600 rounded-full bg-black'></div>
                    <div className='h-[10px] w-[10px] border-2 border-solid border-gray-600 rounded-full bg-black'></div>
                  </div>
                </div>
              </section>

              {/* PHONE */}
              <section className='grid -mt-44 relative z-30 w-full items-center justify-center'>
                <div className='bg-black grid h-[160px] w-[88px] rounded-lg p-1 border-2 border-solid border-gray-600'>
                  <div className='bg-gray-600 relative overflow-hidden rounded-lg border-2 border-solid border-gray-600'>
                    <img
                      className='w-full h-full'
                      src={portfolioItem.images[0]}
                      alt='phone display'
                    />
                    <div className='grid absolute justify-center bottom-1 w-full'>
                      <div className='h-[15px] w-[15px] border-2 border-solid border-gray-600 rounded-full'></div>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            {/* Display container large */}
            <section className='hidden lg:grid relative'>
              {/* PHONE */}
              <section className='grid z-30 absolute bottom-2 left-4 lg:mb-10 lg:ml-10 items-center justify-center'>
                <div className='relative bg-white grid h-[160px] w-[88px] rounded-lg p-1 border-2 border-solid border-black'>
                  <div className='bg-white overflow-hidden rounded-lg border-2 border-solid border-black'>
                    <img
                      className='h-full w-full'
                      src={portfolioItem.images[0]}
                      alt='phone display'
                    />
                  </div>
                  <div className='grid items-center justify-center absolute w-full bottom-0 pb-2'>
                    <div className='h-[15px] w-[15px] border-2 border-solid border-black rounded-full'></div>
                  </div>
                </div>
              </section>

              {/* LAPTOP */}
              <section className='grid grid-rows-ten-one h-fit justify-center items-center absolute z-20 translate-y-2/4 lg:mt-24 ml-20'>
                <LaptopDevice portfolioItem={portfolioItem} />
              </section>

              {/* MONITOR */}
              <section className='grid grid-rows-aa absolute top-1 right-1'>
                <div className='grid lg:w-[400px] lg:h-[290px] pt-2 pr-2 pl-2 grid-rows-rev bg-black rounded-lg border-2 border-solid border-gray-600'>
                  <div className='bg-black rounded border-2 overflow-hidden border-solid border-gray-600'>
                    <img
                      className='w-full h-full'
                      src={portfolioItem.images[2]}
                      alt='phone display'
                    />
                  </div>
                  <div className='grid grid-flow-col items-center py-1 pr-4 gap-2 justify-end'>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                  </div>
                </div>
              </section>
            </section>

            <section className='flex justify-between items-end py-2 border-t-2 border-solid border-black'>
              <article className='pl-3'>
                <h6 className='flex'>
                  PHONE - <span className='flex text-gray-800'>TABLET</span> -
                  LAPTOP - <span className='flex text-gray-800'>MONITOR</span>
                </h6>
                <h3>Fully Responsive Design</h3>
              </article>
              <div className='flex items-center h-full pr-3'>
                <a
                  target='_blank'
                  className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full items-center'
                  rel='noreferrer'
                  href={portfolioItem.liveSite}
                >
                  LIVE SITE
                </a>
              </div>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}

export default PortfolioItemPage;
