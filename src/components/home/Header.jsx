import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Data
import { businessInfo } from '../../utils/CompanyDataUtil';
import { headerInfoArray } from '../../utils/HomePageDataUtils';
// Icons
import { FiCheckCircle } from 'react-icons/fi';
import ButtonComponent from '../global/ButtonComponent';

function Header() {
  const [headerDataArray] = useState(headerInfoArray);
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <div className='grid h-full min-h-screen mt-6'>
      <header className='grid w-full'>
        <section className='grid w-full h-full'>
          <article className='grid h-fit justify-center'>
            <div className='grid w-fit mt-8 max-w-[85%] mx-auto'>
              <h1 className='poppins_title text-6xl mx-auto text-centers'>
                {businessInfo.companyName}
              </h1>
            </div>
          </article>

          <article className='overflow-hidden grid max-w-[80%] mx-auto'>
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
                , we specialize in delivering top-notch web and app development,
                as well as innovative circuit solutions. Our portfolio
                demonstrates our commitment to quality and excellence in every
                project we undertake.
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

            <div>
              <ul className='grid gap-2'>
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
            </div>

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
          </article>
        </section>
      </header>
    </div>
  );
}

export default Header;
