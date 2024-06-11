import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ContactForm from '../../components/contact/ContactForm';
import ComponentTitles from '../../components/global/ComponentTitles';
import { businessInfo } from '../../utils/CompanyDataUtil';
import ContactButtons from '../../components/global/ContactButtons';


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
            <div className='grid justify-center'>
              <section className='grid max-w-lg items-center text-center pt-8 lg:h-fit lg:my-auto lg:justify-center'>
                <div>
                  <span className='text-primary lg:!text-start mb-2 block text-xl !font-semibold poppins_title lg:pl-4'>
                    Lets chat
                  </span>
                  <h2 className='mb-8 text-3xl font-bold sm:text-5xl text-text-alt poppins_title'>
                    Tell me about your <br className='hidden lg:block' />{' '}
                    project and goals.
                  </h2>
                  <h3 className='poppins_text text-sm text-text-main'>
                    Lets see what we can create!
                  </h3>
                </div>

                <div>
                  <ContactButtons />
                </div>

                <div className='my-6 lg:hidden'>
                  <span className='poppins_text text-text-main text-xl !font-semibold'>
                    ~ OR ~
                  </span>
                </div>
              </section>
            </div>

            <section className='my-auto grid lg:justify-center'>
              <ContactForm />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
