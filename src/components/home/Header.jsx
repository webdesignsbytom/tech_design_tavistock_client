import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Data
import { businessInfo } from '../../utils/CompanyDataUtil';
import { headerInfoArray } from '../../utils/HomePageDataUtils';
// Icons
import { FiCheckCircle } from 'react-icons/fi';
import ButtonComponent from '../global/ButtonComponent';
// Images
import CollageImage from '../../assets/images/portfolio/collage1.png';

function Header() {
  const [headerDataArray] = useState(headerInfoArray);
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <div className='grid h-full min-h-screen mt-6 lg:mt-0 lg:overflow-hidden'>
      <header className='grid w-full h-full'>
        <section className='grid w-full h-full'>
          <article className='overflow-hidden grid h-full lg:grid-cols-2'>
            {/* Left */}
            <section className='grid h-full lg:items-center'>
              <div className='grid h-full lg:h-fit lg:mb-10'>
                <section className='grid h-fit justify-center'>
                  <div className='grid w-fit mt-8 max-w-[85%] mx-auto'>
                    <h1 className='poppins_title text-6xl mx-auto text-centers'>
                      {businessInfo.companyName}
                    </h1>
                  </div>
                </section>
                <div className='grid w-[80%] mx-auto'>
                  <div>
                    <h2 className='poppins_title text-4xl text-text-alt my-8 text-center'>
                      Modern Websites Apps and Desktop Software for any need.
                    </h2>
                  </div>
                  <div className='grid justify-center mt-4 sm:mt-0 sm:items-end text-center justify-items-center w-full h-full'>
                    <p className='text-base'>
                      At{' '}
                      <span className='font-semibold'>
                        {businessInfo.companyName}
                      </span>
                      , we specialize in delivering top-notch web and app
                      development, as well as innovative circuit solutions. Our
                      portfolio demonstrates our commitment to quality and
                      excellence in every project we undertake.
                    </p>
                  </div>
                  <div className='my-8'>
                    <div className='grid sm:w-1/2 mx-auto'>
                      <ButtonComponent
                        label='Contact Now'
                        onClick={() => navigateToPage('/contact')}
                        type='primary'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Right */}
            <section className='grid h-full lg:items-center animate-fade-in-move-up'>
              <div className='lg:h-fit'>
                <div className='hidden lg:grid overflow-hidden '>
                  <div className='grid mx-auto w-[400px] py-6 overflow-hidden'>
                    <img
                      src={CollageImage}
                      alt='Collage of tech'
                      className='w-full h-full object-contain rounded-2xl'
                    />
                  </div>
                </div>
                <div className='grid h-full w-[80%] mx-auto lg:h-fit'>
                  <ul className='grid lg:grid-cols-2 gap-2'>
                    {headerDataArray.map((item, index) => {
                      return (
                        <li key={index} className='grid justify-center'>
                          <div className='grid grid-cols-reg gap-4 w-fit'>
                            <div className='text-text-alt'>
                              <FiCheckCircle size={28} />
                            </div>
                            <div>{item.content}</div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <div className='grid my-8'>
                    <div className='grid sm:grid-cols-2 gap-4'>
                      <div className=''>
                        <ButtonComponent
                          label='Explore Portfolio'
                          onClick={() => navigateToPage('/portfolio')}
                          type='primary'
                        />
                      </div>
                      <div className=''>
                        <ButtonComponent
                          label='Learn More'
                          onClick={() => navigateToPage('/about')}
                          type='secondary'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </section>
      </header>
    </div>
  );
}

export default Header;
