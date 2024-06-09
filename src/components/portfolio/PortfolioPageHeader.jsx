import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components
import SocialBar from '../social/SocialBar';
import ButtonComponent from '../global/ButtonComponent';
// Data
import { businessInfo } from '../../utils/CompanyDataUtil';

function PortfolioPageHeader() {
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <header className='grid relative justify-center items-center dark:text-white'>
      <section className='text-center mb-10 md:mb-0'>
        <article className='mb-4 px-4 mx-auto'>
          <div className='my-6'>
            <h4 className='font-semibold'>Hello I am</h4>
            <h1 className='text-3xl lg:text-5xl font-semibold text-text-alt poppins_title'>
              Tom Brockington
            </h1>
          </div>
          <div>
            <div>
              <p>
                I am the creator and manager of {businessInfo.companyName} where
                I am proud to display some of the projects i have worked on.
                These might inspire you for design ideas or functionality you
                want for your own project.
              </p>
            </div>
            <div className='mt-2'>
              <p>
                I design a number of products to work with circuits and wireless
                communication.
              </p>
            </div>
            <div className='mt-2'>
              <p>
                Check out below for{' '}
                <span className='font-semibold text-text-alt'>Website</span>{' '}
                designs,{' '}
                <span className='font-semibold text-text-alt'>Apps</span> for
                controlling machines, and even building{' '}
                <span className='font-semibold text-text-alt'>Circuits</span> to
                drive theses machines.
              </p>{' '}
            </div>
          </div>
        </article>
        <section className='grid gap-4 mt-6 px-6'>
          <div className=''>
            <ButtonComponent
              label='Contact Now'
              onClick={() => navigateToPage('/contact')}
              type='primary'
            />
          </div>
          <div className=''>
            <ButtonComponent
              label='See More'
              onClick={() => navigateToPage('/contact')}
              type='secondary'
            />
          </div>
        </section>
      </section>
      <section className='absolute bottom-10 flex justify-between w-full px-10'>
        <div className='hidden lg:grid'>
          <SocialBar
            background={'bg-white dark:bg-black'}
            icons={'text-main-colour dark:text-gray-300'}
          />
        </div>
        <div className='text-center grid justify-center'>
          <a
            href={`mailto:${businessInfo.emailAddress}`}
            rel='noreferrer'
            target='_blank'
            className='text-xs md:text-base'
          >
            {businessInfo.emailAddress}
          </a>
        </div>
      </section>
    </header>
  );
}

export default PortfolioPageHeader;
