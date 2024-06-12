import React from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import ButtonComponent from './ButtonComponent';

function PortfolioCta() {
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <section className='grid w-full mx-auto px-6'>
      <div className='grid lg:w-1/2 mx-auto justify-center'>
        <div className='text-center my-8 lg:px-28'>
          <p className='text-text-main poppins_text'>
            <span className='font-semibold'>Would</span> you like to see more examples of our design and programming skills? The Portfolio page contains a great collection of examples of styles and features, along with previous websites and apps built.
          </p>
        </div>
        <div className='grid w-full mx-auto justify-items-center'>
          <ButtonComponent
            label='Demos and Products'
            onClick={() => navigateToPage('/portfolio')}
            type='primary'
          />
        </div>
      </div>
    </section>
  );
}

export default PortfolioCta;
