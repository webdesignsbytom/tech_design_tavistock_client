import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ContactForm from '../../components/contact/ContactForm';
import ContactButtons from '../../components/global/ContactButtons';
import MessageModal from '../../components/contact/MessageModal';

function ContactPage() {
  const [hasSubmissionFailed, setHasSubmissionFailed] = useState(false);
  const [messageModalOpen, setMessageModalOpen] = useState(false);

  const closeModal = () => {
    setMessageModalOpen(false);
    setHasSubmissionFailed(false);
  };

  return (
    <div className='min-h-screen w-full relative'>
      <div className='hidden lg:grid absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {messageModalOpen && (
          <MessageModal
            hasSubmissionFailed={hasSubmissionFailed}
            closeModal={closeModal}
          />
        )}
      </div>
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

            <section className='my-auto grid relative lg:justify-center'>
            <div className='grid lg:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {messageModalOpen && (
          <MessageModal
            hasSubmissionFailed={hasSubmissionFailed}
            closeModal={closeModal}
          />
        )}
      </div>
              <ContactForm
                setHasSubmissionFailed={setHasSubmissionFailed}
                setMessageModalOpen={setMessageModalOpen}
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
