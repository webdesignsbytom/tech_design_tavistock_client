import React from 'react';
// Components
import SocialBar from '../social/SocialBar';
import ButtonComponent from '../global/ButtonComponent';
// Data
import { businessInfo } from '../../utils/CompanyDataUtil';
import useNavigateToPage from '../../hooks/useNavigateToPage';

function PortfolioPageHeader({ portfolioDisplayRef }) {
  const navigateToPage = useNavigateToPage();

  const onClickSeeMore = () => {
    const ref = portfolioDisplayRef.current;

    ref.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='grid relative justify-center items-center'>
      <section className='text-center mb-10 md:mb-0'>
        <article className='mb-4 px-4 mx-auto'>
          <div className='my-6'>
            <h4 className='font-semibold'>Hello I am</h4>
            <h1 className='text-3xl lg:text-5xl font-semibold text-purple-main poppins_title'>
              {businessInfo.owner}
            </h1>
          </div>
          <div className='lg:w-1/2 mx-auto'>
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
                <span className='font-semibold text-purple-main'>Website</span>{' '}
                designs,{' '}
                <span className='font-semibold text-purple-main'>Apps</span> for
                controlling machines, and even building{' '}
                <span className='font-semibold text-purple-main'>Circuits</span> to
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
              onClick={onClickSeeMore}
              type='secondary'
            />
          </div>
        </section>
      </section>
      <section className='absolute hidden lg:flex bottom-10 justify-between w-full px-10'>
        <div className=''>
          <SocialBar
            background='bg-white'
            icons='text-main-colour'
          />
        </div>
        <div className='text-center grid justify-center'>
          <a
            href={`mailto:${businessInfo.emailAddress}`}
            rel='noreferrer'
            target='_blank'
            className='text-base'
          >
            {businessInfo.emailAddress}
          </a>
        </div>
      </section>
    </header>
  );
}

export default PortfolioPageHeader;
