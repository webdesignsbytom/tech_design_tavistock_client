import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ContactForm from '../../components/contact/ContactForm';
import ComponentTitles from '../../components/global/ComponentTitles';
import { businessInfo } from '../../utils/CompanyDataUtil';
// Icons
import { MdOutlineEmail } from 'react-icons/md';

function ContactPage() {
  return (
    <div className='min-h-screen w-full'>
      <div className='grid w-full h-full'>
        {/* Header container */}
        <div className='grid grid-rows-reg lg:h-screen w-full overflow-y-scroll scrollbar-hidden lg:overflow-y-hidden bg-main-bg'>
          {/* Navigation */}
          <Navbar />
          <main className='grid justify-center p-4 lg:overflow-hidden lg:grid-cols-2'>

            {/* Text */}
            <section className='grid max-w-lg items-center text-center pt-8 dark:text-gray-400 lg:h-fit lg:my-auto lg:justify-center'>
              <div>
                <span className='text-primary !text-start mb-2 block text-xl !font-semibold poppins_title lg:pl-4'>
                  Lets chat
                </span>
                <h2 className='mb-8 text-3xl font-bold sm:text-5xl text-text-alt poppins_title'>
                  Tell me about your <br className='hidden lg:block' /> project and goals.
                </h2>
                <h3 className='poppins_text text-sm text-text-main'>
                  Lets see what we can create!
                </h3>
              </div>

              <div className='px-4 mt-4 max-w-lg lg:max-w-2xl mx-auto'>
                <article className='grid grid-cols-reg gap-2 lg:gap-4 h-full w-full bg-white shadow-md rounded py-1 px-2 lg:px-4 lg:py-4'>
                  <section className='grid items-center justify-center'>
                    <div className='text-text-main p-2 bg-gray-300 rounded text-center '>
                      <MdOutlineEmail size={25} />
                    </div>
                  </section>
                  <section className='grid justify-start poppins_text w-full grid-rows-2 !text-start'>
                    <div className='text-text-alt grid font-semibold w-full'>
                      Mail me at
                    </div>
                    <div>
                      <a
                        className='text-sm'
                        href={`mailto:${businessInfo.emailAddress}`}
                      >
                        {businessInfo.emailAddress}
                      </a>
                    </div>
                  </section>
                </article>
              </div>

              <div className='my-6 lg:hidden'>
                <span className='poppins_text text-text-main text-xl !font-semibold'>
                  ~ OR ~
                </span>
              </div>
            </section>

            <section className='lg:overflow-hidden'>
              <ContactForm />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
