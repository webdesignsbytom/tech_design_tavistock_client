import React from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import PhoneDevices from '../../components/devices/PhoneDevices';
import TabletDevices from '../../components/devices/TabletDevices';
import DesktopDevices from '../../components/devices/DesktopDevices';
import Navbar from '../../components/nav/Navbar';
// Images
import ArduinoDevice from '../../assets/images/tech/arduino.png';
import PiDevice from '../../assets/images/tech/raspberry_pi.png';
import LogoBackground from '../../assets/images/logos/wdbt-black.svg';
// Icons
import { FaCode } from 'react-icons/fa';
import { FaArrowCircleDown } from 'react-icons/fa';

function HomePage() {
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <div className='min-h-screen w-full overflow-hidden'>
      <div className='grid w-full h-full overflow-y-scroll scroll-hidden'>
        {/* Header container */}
        <div className='grid grid-rows-reg h-screen w-full overflow-hidden bg-slate-50'>
          {/* Navigation */}
          <Navbar />

          {/* Header */}
          <header className='grid w-full h-full p-10 overflow-hidden'>
            {/* Down arrow */}
            <div className='absolute z-10 bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer'>
              <div title='See more web and app designs' className='text-alt-colour cursor-pointer hover:animate-pulse'>
                <a href='#main-display-1'>
                  <FaArrowCircleDown size={40} />
                </a>
              </div>
            </div>
            <div className='grid w-full h-full overflow-hidden shadow-lg rounded-lg bg-white'>
              <div className='grid grid-cols-2 w-full h-full overflow-hidden'>
                {/* Text display */}
                <section className='grid w-full h-full overflow-hidden main__bg'>
                  <div className='grid relative w-full h-full justify-center items-center justify-items-center overflow-hidden'>
                    <article className='grid opacity-95 z-30 w-fit -mt-48 h-fit px-6 py-8 shadow-xl rounded-lg bg-white overflow-hidden russo-one-regular'>
                      <div>
                        <h1 className='text-4xl russo-one-regular'>
                          Tech Design <span className='italic'>by</span> Tom
                        </h1>
                      </div>
                      <div className='text-center font-medium'>
                        <h2 className=''>Web - Mobile - Desktop</h2>
                      </div>
                      <div className='text-center font-medium'>
                        <h3>App + Circuit Design</h3>
                      </div>
                    </article>
                  </div>
                </section>

                {/* Tech display */}
                <section className='grid relative overflow-hidden pr-6'>
                  <div className='absolute right-8 top-4'>
                    <FaCode size={50} />
                  </div>
                  <div className='grid relative grid-rows-2 animate-fade-in-move-up overflow-hidden pr-6'>
                    <div className='grid items-center -mb-16'>
                      <section className='relative p-1 w-full h-fit'>
                        <div className='absolute z-30 left-2 top-4'>
                          <PhoneDevices />
                        </div>
                        <div className='absolute z-20 transform -mt-6 -translate-x-1/2 left-[35%]'>
                          <TabletDevices />
                          <div className='absolute z-40 mt-10 right-3'>
                            <img
                              src={ArduinoDevice}
                              alt='Arduino'
                              className='w-28 h-28 object-contain'
                            />
                          </div>
                          <div className='absolute mt-20 z-20'>
                            <img
                              src={PiDevice}
                              alt='Raspberry Pi'
                              className='w-28 h-28 object-contain'
                            />
                          </div>
                        </div>
                        <div className='absolute z-10 right-2'>
                          <DesktopDevices />
                        </div>
                      </section>
                    </div>

                    <div className='circuit__bg opacity-50 absolute rotate-45 w-[350px] h-[350px] z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>

                    <section className='grid z-20 w-full h-full justify-end items-end'>
                      <article className='p-6'>
                        <div className='grid justify-end py-4 leading-4'>
                          <ul className='grid gap-2 custom__list__style justify-items-end justify-end text-end'>
                            <li className='w-fit'>
                              <p>Robotics and sensory devices</p>
                            </li>
                            <li className='w-fit'>
                              <p>Interactive web and mobile games</p>
                            </li>
                            <li className='w-fit'>
                              <p>Bluetooth and wifi device connections</p>
                            </li>
                          </ul>
                        </div>
                        <div className='grid w-full h-fit'>
                          <button
                            onClick={() => navigateToPage('/projects')}
                            className='text-xl font-semibold px-4 py-2 cursor-pointer hover:bg-alt-colour  hover:text-white active:scale-95 text-alt-colour border-solid border-alt-colour border-2 rounded-lg bg-white'
                          >
                            See projects
                          </button>
                        </div>
                      </article>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </header>
        </div>

        {/* Main content */}
        <main className='grid w-full h-full bg-yellow-400'>

          {/* First section of main */}
          <section
            id='main-display-1'
            className='grid h-screen bg-green-400 w-full overflow-hidden'
          >
            two
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
