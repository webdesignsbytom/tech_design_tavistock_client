import React from 'react';
import { Link } from 'react-router-dom';
// Images
import DevicesImage from '../../assets/images/sales/devices.jpg'
import CodeImage from '../../assets/images/sales/code3.jpg'
import Heroes from '../../assets/images/sales/heros-expanding.png'
import { businessInfo } from '../../utils/CompanyDataUtil';

function AboutSection({ myRef }) {

  const executeScroll = () => myRef.current.scrollIntoView()  

  return (
    <section className='grid overflow-hidden dark:text-gray-100 mt-6 md:mt-0 mb-12 mx-4'>
      <div className='container mx-auto'>
        <section className='-mx-4 flex flex-wrap items-center justify-between'>
          {/* Images */}
          <div className='w-full px-4 lg:w-6/12'>
            <section className='-mx-3 flex items-center sm:-mx-4'>
              <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                <div className='py-3 sm:py-4'>
                  <img
                    src={Heroes}
                    alt='heroes expanding out of screen'
                    className='w-full bg-gray-300 rounded-2xl mt-4'
                  />
                </div>
                <div className='py-3 sm:py-4'>
                  <img
                    src={CodeImage}
                    alt='code on screen'
                    className='w-full rounded-2xl'
                  />
                </div>
              </div>
              <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                <div className='relative z-10 my-4'>
                  <img
                    src={DevicesImage}
                    alt='mutliple devices on table'
                    className='w-full rounded-2xl'
                  />
                  <span className='absolute -right-7 -bottom-7 z-[-1]'>
                    <svg
                      width='134'
                      height='106'
                      viewBox='0 0 134 106'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='1.66667'
                        cy='104'
                        r='1.66667'
                        transform='rotate(-90 1.66667 104)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='16.3333'
                        cy='104'
                        r='1.66667'
                        transform='rotate(-90 16.3333 104)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='31'
                        cy='104'
                        r='1.66667'
                        transform='rotate(-90 31 104)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='45.6667'
                        cy='104'
                        r='1.66667'
                        transform='rotate(-90 45.6667 104)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='60.3334'
                        cy='104'
                        r='1.66667'
                        transform='rotate(-90 60.3334 104)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='88.6667'
                        cy='104'
                        r='1.66667'
                        transform='rotate(-90 88.6667 104)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='117.667'
                        cy='104'
                        r='1.66667'
                        transform='rotate(-90 117.667 104)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='74.6667'
                        cy='104'
                        r='1.66667'
                        transform='rotate(-90 74.6667 104)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='103'
                        cy='104'
                        r='1.66667'
                        transform='rotate(-90 103 104)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='132'
                        cy='104'
                        r='1.66667'
                        transform='rotate(-90 132 104)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='1.66667'
                        cy='89.3333'
                        r='1.66667'
                        transform='rotate(-90 1.66667 89.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='16.3333'
                        cy='89.3333'
                        r='1.66667'
                        transform='rotate(-90 16.3333 89.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='31'
                        cy='89.3333'
                        r='1.66667'
                        transform='rotate(-90 31 89.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='45.6667'
                        cy='89.3333'
                        r='1.66667'
                        transform='rotate(-90 45.6667 89.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='60.3333'
                        cy='89.3338'
                        r='1.66667'
                        transform='rotate(-90 60.3333 89.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='88.6667'
                        cy='89.3338'
                        r='1.66667'
                        transform='rotate(-90 88.6667 89.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='117.667'
                        cy='89.3338'
                        r='1.66667'
                        transform='rotate(-90 117.667 89.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='74.6667'
                        cy='89.3338'
                        r='1.66667'
                        transform='rotate(-90 74.6667 89.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='103'
                        cy='89.3338'
                        r='1.66667'
                        transform='rotate(-90 103 89.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='132'
                        cy='89.3338'
                        r='1.66667'
                        transform='rotate(-90 132 89.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='1.66667'
                        cy='74.6673'
                        r='1.66667'
                        transform='rotate(-90 1.66667 74.6673)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='1.66667'
                        cy='31.0003'
                        r='1.66667'
                        transform='rotate(-90 1.66667 31.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='16.3333'
                        cy='74.6668'
                        r='1.66667'
                        transform='rotate(-90 16.3333 74.6668)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='16.3333'
                        cy='31.0003'
                        r='1.66667'
                        transform='rotate(-90 16.3333 31.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='31'
                        cy='74.6668'
                        r='1.66667'
                        transform='rotate(-90 31 74.6668)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='31'
                        cy='31.0003'
                        r='1.66667'
                        transform='rotate(-90 31 31.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='45.6667'
                        cy='74.6668'
                        r='1.66667'
                        transform='rotate(-90 45.6667 74.6668)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='45.6667'
                        cy='31.0003'
                        r='1.66667'
                        transform='rotate(-90 45.6667 31.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='60.3333'
                        cy='74.6668'
                        r='1.66667'
                        transform='rotate(-90 60.3333 74.6668)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='60.3333'
                        cy='30.9998'
                        r='1.66667'
                        transform='rotate(-90 60.3333 30.9998)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='88.6667'
                        cy='74.6668'
                        r='1.66667'
                        transform='rotate(-90 88.6667 74.6668)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='88.6667'
                        cy='30.9998'
                        r='1.66667'
                        transform='rotate(-90 88.6667 30.9998)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='117.667'
                        cy='74.6668'
                        r='1.66667'
                        transform='rotate(-90 117.667 74.6668)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='117.667'
                        cy='30.9998'
                        r='1.66667'
                        transform='rotate(-90 117.667 30.9998)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='74.6667'
                        cy='74.6668'
                        r='1.66667'
                        transform='rotate(-90 74.6667 74.6668)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='74.6667'
                        cy='30.9998'
                        r='1.66667'
                        transform='rotate(-90 74.6667 30.9998)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='103'
                        cy='74.6668'
                        r='1.66667'
                        transform='rotate(-90 103 74.6668)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='103'
                        cy='30.9998'
                        r='1.66667'
                        transform='rotate(-90 103 30.9998)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='132'
                        cy='74.6668'
                        r='1.66667'
                        transform='rotate(-90 132 74.6668)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='132'
                        cy='30.9998'
                        r='1.66667'
                        transform='rotate(-90 132 30.9998)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='1.66667'
                        cy='60.0003'
                        r='1.66667'
                        transform='rotate(-90 1.66667 60.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='1.66667'
                        cy='16.3333'
                        r='1.66667'
                        transform='rotate(-90 1.66667 16.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='16.3333'
                        cy='60.0003'
                        r='1.66667'
                        transform='rotate(-90 16.3333 60.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='16.3333'
                        cy='16.3333'
                        r='1.66667'
                        transform='rotate(-90 16.3333 16.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='31'
                        cy='60.0003'
                        r='1.66667'
                        transform='rotate(-90 31 60.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='31'
                        cy='16.3333'
                        r='1.66667'
                        transform='rotate(-90 31 16.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='45.6667'
                        cy='60.0003'
                        r='1.66667'
                        transform='rotate(-90 45.6667 60.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='45.6667'
                        cy='16.3333'
                        r='1.66667'
                        transform='rotate(-90 45.6667 16.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='60.3333'
                        cy='60.0003'
                        r='1.66667'
                        transform='rotate(-90 60.3333 60.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='60.3333'
                        cy='16.3333'
                        r='1.66667'
                        transform='rotate(-90 60.3333 16.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='88.6667'
                        cy='60.0003'
                        r='1.66667'
                        transform='rotate(-90 88.6667 60.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='88.6667'
                        cy='16.3333'
                        r='1.66667'
                        transform='rotate(-90 88.6667 16.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='117.667'
                        cy='60.0003'
                        r='1.66667'
                        transform='rotate(-90 117.667 60.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='117.667'
                        cy='16.3333'
                        r='1.66667'
                        transform='rotate(-90 117.667 16.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='74.6667'
                        cy='60.0003'
                        r='1.66667'
                        transform='rotate(-90 74.6667 60.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='74.6667'
                        cy='16.3333'
                        r='1.66667'
                        transform='rotate(-90 74.6667 16.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='103'
                        cy='60.0003'
                        r='1.66667'
                        transform='rotate(-90 103 60.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='103'
                        cy='16.3333'
                        r='1.66667'
                        transform='rotate(-90 103 16.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='132'
                        cy='60.0003'
                        r='1.66667'
                        transform='rotate(-90 132 60.0003)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='132'
                        cy='16.3333'
                        r='1.66667'
                        transform='rotate(-90 132 16.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='1.66667'
                        cy='45.3333'
                        r='1.66667'
                        transform='rotate(-90 1.66667 45.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='1.66667'
                        cy='1.66683'
                        r='1.66667'
                        transform='rotate(-90 1.66667 1.66683)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='16.3333'
                        cy='45.3333'
                        r='1.66667'
                        transform='rotate(-90 16.3333 45.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='16.3333'
                        cy='1.66683'
                        r='1.66667'
                        transform='rotate(-90 16.3333 1.66683)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='31'
                        cy='45.3333'
                        r='1.66667'
                        transform='rotate(-90 31 45.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='31'
                        cy='1.66683'
                        r='1.66667'
                        transform='rotate(-90 31 1.66683)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='45.6667'
                        cy='45.3333'
                        r='1.66667'
                        transform='rotate(-90 45.6667 45.3333)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='45.6667'
                        cy='1.66683'
                        r='1.66667'
                        transform='rotate(-90 45.6667 1.66683)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='60.3333'
                        cy='45.3338'
                        r='1.66667'
                        transform='rotate(-90 60.3333 45.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='60.3333'
                        cy='1.66683'
                        r='1.66667'
                        transform='rotate(-90 60.3333 1.66683)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='88.6667'
                        cy='45.3338'
                        r='1.66667'
                        transform='rotate(-90 88.6667 45.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='88.6667'
                        cy='1.66683'
                        r='1.66667'
                        transform='rotate(-90 88.6667 1.66683)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='117.667'
                        cy='45.3338'
                        r='1.66667'
                        transform='rotate(-90 117.667 45.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='117.667'
                        cy='1.66683'
                        r='1.66667'
                        transform='rotate(-90 117.667 1.66683)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='74.6667'
                        cy='45.3338'
                        r='1.66667'
                        transform='rotate(-90 74.6667 45.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='74.6667'
                        cy='1.66683'
                        r='1.66667'
                        transform='rotate(-90 74.6667 1.66683)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='103'
                        cy='45.3338'
                        r='1.66667'
                        transform='rotate(-90 103 45.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='103'
                        cy='1.66683'
                        r='1.66667'
                        transform='rotate(-90 103 1.66683)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='132'
                        cy='45.3338'
                        r='1.66667'
                        transform='rotate(-90 132 45.3338)'
                        fill='#3056D3'
                      />
                      <circle
                        cx='132'
                        cy='1.66683'
                        r='1.66667'
                        transform='rotate(-90 132 1.66683)'
                        fill='#3056D3'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Text data */}
          <main className='w-full px-4 lg:w-1/2 xl:w-5/12'>
            <article className='mt-10 lg:-mt-6 mr-6 animate-fade-in-move-up'>
              <span className='text-primary mb-2 block text-lg font-semibold'>
                Welcome to {businessInfo.companyName}
              </span>
              <h2 className='text-dark mb-8 text-3xl font-bold sm:text-4xl'>
                Modern and fully customisable App design
              </h2>
              <p className='text-body-color mb-8 text-base'>
                Your dream website or app can come to life with our help. Producing beautiful results designed with the
                latest search engine optimisation tactics and features as
                standard.
              </p>
              <p className='text-body-color mb-3 text-base'>
                We are a few full time people and serveral freelancers working together to produce quality code to a deadline.
              </p>
              <p className='text-body-color mb-3 text-base'>
                We offer a range of affordable websites, apps and other software and can complete any
                custom build you imagine.
              </p>
              {/* CTA BUTTONS */}
              <section className='grid p-2 md:p-0 md:mb-12 md:flex gap-3 w-full'>
                <Link
                  to='/contact'
                  className='w-full relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
                >
                  <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
                  <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
                  <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 '></span>
                  <span className='relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
                    Contact Now
                  </span>
                </Link>
                <Link
                  to='/portfolio'
                  className='w-full relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
                >
                  <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-yellow-500 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
                  <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
                  <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-yellow-500 rounded-md opacity-0 group-hover:opacity-100 '></span>
                  <span className='relative text-yellow-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
                    See Portfolio
                  </span>
                </Link>
                <Link
                  onClick={executeScroll}
                  className='w-full relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
                >
                  <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-green-600 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
                  <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
                  <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-green-600 rounded-md opacity-0 group-hover:opacity-100 '></span>
                  <span className='relative text-green-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
                    Pricing
                  </span>
                </Link>
              </section>
            </article>
          </main>
        </section>
      </div>
    </section>
  );
}

export default AboutSection;
