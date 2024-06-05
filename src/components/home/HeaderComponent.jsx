import React from 'react';
import { useNavigate } from 'react-router-dom';
// Icons
import { FaArrowCircleDown, FaCode } from 'react-icons/fa';
import PhoneDevices from '../devices/PhoneDevices';
import TabletDevices from '../devices/TabletDevices';
import DesktopDevices from '../devices/DesktopDevices';
// Images
import ArduinoDevice from '../../assets/images/tech/arduino.png';
import PiDevice from '../../assets/images/tech/raspberry_pi.png';

function HeaderComponent() {
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <header className='grid w-full h-full p-10 overflow-hidden'>
      {/* Down arrow */}
      <div className='absolute z-10 bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer'>
        <div
          title='See more web and app designs'
          className='text-alt-colour cursor-pointer hover:animate-pulse'
        >
          <a href='#information'>
            <FaArrowCircleDown size={40} />
          </a>
        </div>
      </div>

      {/* Main contents of header */}
      <div className='grid w-full h-full overflow-hidden shadow-lg rounded-lg bg-white'>
        <div className='grid grid-cols-2 w-full h-full overflow-hidden'>
          {/* Text display */}
          <section className='grid w-full h-full overflow-hidden main__bg'>
            <div className='grid relative w-full h-full justify-center items-center justify-items-center overflow-hidden'>
              <article className='grid opacity-95 z-30 w-fit -mt-1/2 h-fit px-16 py-8 shadow-xl rounded-lg bg-white overflow-hidden russo-one-regular'>
                <section>
                  <div className='mb-2'>
                    <h1 className='text-5xl russo-one-regular'>
                      Tech Design <br /> <span className='italic'>by</span> Tom
                    </h1>
                  </div>
                  <div className='text-center font-medium'>
                    <h2 className=''>Web - Mobile - Desktop</h2>
                  </div>
                  <div className='text-center font-medium'>
                    <h3>App + Circuit Design</h3>
                  </div>
                </section>

                <section className='grid pt-6'>
                  <div className='grid grid-cols-2 gap-4 overflow-hidden bg-white'>
                    <div>
                      <button
                        onClick={() => navigateToPage('/contact')}
                        className='w-full h-fit px-4 py-2 font-semibold bg-white text-alt-colour border-2 border-solid border-alt-colour rounded-lg hover:bg-alt-colour hover:text-white duration-300 shadow-lg hover:shadow-2xl'
                      >
                        See More
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => navigateToPage('/contact')}
                        className='w-full h-fit px-4 py-2 font-semibold bg-alt-colour text-white border-2 border-solid border-alt-colour rounded-lg hover:text-alt-colour hover:bg-white duration-300 shadow-lg hover:shadow-2xl'
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </section>
              </article>
            </div>
          </section>

          {/* Tech display */}
          <section className='grid relative overflow-hidden pr-6 russo-one-regular'>
            <div className='absolute right-8 top-4'>
              <FaCode size={50} />
            </div>
            <div className='grid relative grid-rows-2 animate-fade-in-move-up overflow-hidden pr-6'>
              <div className='grid items-center -mb-16'>
                <section className='relative p-1 w-full h-fit'>
                  <div className='absolute z-30 left-2 top-4 w-[108px] h-[200px] min-w-[108px] min-h-[200px] max-w-[108px] max-h-[200px] overflow-hidden'>
                    <PhoneDevices />
                  </div>
                  <div className='absolute z-20 transform -mt-6 -translate-x-1/2 left-[35%] w-[240px] h-[140px] min-w-[240px] min-h-[140px] max-w-[240px] max-h-[140px] overflow-hidden'>
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
                  <div className='absolute z-10 right-2 w-[320px] h-[180px] min-w-[320px] min-h-[180px] max-w-[320px] max-h-[220px] xl:w-[345px] xl:h-[220px] xl:min-w-[345px] xl:min-h-[220px] xl:max-w-[345px] xl:max-h-[220px] overflow-hidden'>
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
                      className='text-xl font russo-one-regular font-semibold px-4 py-2 cursor-pointer shadow-lg hover:shadow-2xl hover:bg-alt-colour  hover:text-white active:scale-95 text-alt-colour border-solid border-alt-colour border-2 rounded-lg bg-white duration-300'
                    >
                      PROJECTS PAGE
                    </button>
                  </div>
                </article>
              </section>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
