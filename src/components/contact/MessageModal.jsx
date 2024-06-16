import React from 'react';
// Components
import ButtonComponent from '../global/ButtonComponent';

function MessageModal({ hasSubmissionFailed, closeModal }) {
  return (
    <article className='bg-white grid h-fit px-4 py-4 shadow-xl rounded-lg'>
        {hasSubmissionFailed ? (
          <div className='text-center h-fit px-4 grid gap-2'>
            <h4 className='text-red-500 text-xl font-semibold'>
              FAILED TO SEND MESSAGE
            </h4>
            <h5 className='text-sm'>Please retry and check you connection</h5>
          </div>
        ) : (
            <div className='text-center h-fit px-4 grid gap-2'>
              <h4 className='text-text-alt text-xl font-semibold'>
                MESSAGE SENT!
              </h4>
              <h5 className='text-sm'>
                Thank you, we will be in contact as soon as possible.
              </h5>
          </div>
        )}
        <section className='grid mt-6 px-6'>
          <div className=''>
            <ButtonComponent
              label='Close'
              onClick={closeModal}
              type='secondary'
            />
          </div>
        </section>
    </article>
  );
}

export default MessageModal;
