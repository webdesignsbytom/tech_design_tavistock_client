import React from 'react';
// Components
import ButtonComponent from './ButtonComponent';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function ContactCta() {
  const navigateToPage = useNavigateToPage();

  return (
    <section className='grid w-full mx-auto px-6'>
      <div className='grid lg:w-1/2 mx-auto justify-center'>
        <div className='text-center my-8 lg:px-28'>
          <p className='text-text-main poppins_text'>
            <span className='font-semibold'>If</span> you have any Questions, ideas or projects you would
            like to discuss. Contact us now and we can talk through details,
            timeframe and budget for any request.
          </p>
        </div>
        <div className='grid w-full mx-auto justify-items-center'>
          <ButtonComponent
            label='Contact Now'
            onClick={() => navigateToPage('/contact')}
            type='primary'
          />
        </div>
      </div>
    </section>
  );
}

export default ContactCta;
