import React from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import ButtonComponent from './ButtonComponent';

function ContactCta() {
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <section className='grid w-full mx-auto mt-6 px-6'>
      <div className='grid w-1/2 mx-auto justify-center'>
        <div className='text-center my-6 px-28'>
          <p>
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
