import React from 'react';
// Images
import DevicesImage from '../../assets/images/portfolio/manager-tom-picture.jpg';
import CodeImage from '../../assets/images/portfolio/web-code-in-react-javascript.png';
import Heroes from '../../assets/images/sales/hero-image-pc-variety-of-programs.png';
// Data
import { businessInfo } from '../../utils/CompanyDataUtil';
// Components
import ButtonComponent from '../global/ButtonComponent';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function AboutSection() {
  const navigateToPage = useNavigateToPage();
  
  return (
    <section className='grid overflow-hidden mt-6 md:mt-0 mb-12 mx-4'>
      <div className='container mx-auto'>
        <section className='-mx-4 flex flex-wrap items-center justify-between'>
          {/* Images */}
          <div className='w-full px-4 lg:w-6/12'>
            <section className='-mx-3 flex items-center sm:-mx-4'>
              <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                <div className='py-3 sm:py-4'>
                  <img
                    src={Heroes}
                    loading='lazy'
                    alt='heroes expanding out of screen'
                    className='w-full bg-gray-300 rounded-2xl mt-4'
                  />
                </div>
                <div className='py-3 sm:py-4'>
                  <img
                    src={CodeImage}
                    loading='lazy'
                    alt='code on screen'
                    className='w-full rounded-2xl'
                  />
                </div>
              </div>
              <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                <div className='relative z-10 my-4'>
                  <img
                    src={DevicesImage}
                    loading='lazy'
                    alt='mutliple devices on table'
                    className='w-full rounded-2xl'
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Text data */}
          <main className='w-full px-4 lg:w-1/2 xl:w-5/12'>
            <article className='mt-10 lg:-mt-6 mr-6 animate-fade-in-move-up'>
              <span className='text-primary mb-2 block text-lg font-semibold'>
                We are {businessInfo.companyName}
              </span>
              <h2 className='mb-8 text-3xl font-bold sm:text-4xl text-purple-main poppins_title'>
                Modern and fully customisable App design
              </h2>
              <p className='mb-8 text-base'>
                Your dream website or app can come to life with our help.
                Producing beautiful results designed with the latest search
                engine optimisation tactics and features as standard.
              </p>
              <p className='mb-3 text-base'>
                We are a few full time people and serveral freelancers working
                together to produce quality code to a deadline.
              </p>
              <p className='mb-3 text-base'>
                We offer a range of affordable websites, apps and other software
                and can complete any custom build you imagine.
              </p>
              {/* CTA BUTTONS */}
              <section className='grid p-2 md:p-0 md:mb-12 md:flex gap-3 w-full mt-8'>
                <div className='grid w-full justify-items-center'>
                  <ButtonComponent
                    label='Contact Now'
                    onClick={() => navigateToPage('/contact')}
                    type='secondary'
                  />
                </div>
                <div className='grid w-full justify-items-center'>
                  <ButtonComponent
                    label='See Portfolio'
                    onClick={() => navigateToPage('/portfolio')}
                    type='primary'
                  />
                </div>
                <div className='grid w-full justify-items-center'>
                  <a href='#why-choose-us' className='w-full' aria-label='See more examples'>
                    <ButtonComponent label='See More!' type='primary' />
                  </a>
                </div>
              </section>
            </article>
          </main>
        </section>
      </div>
    </section>
  );
}

export default AboutSection;
