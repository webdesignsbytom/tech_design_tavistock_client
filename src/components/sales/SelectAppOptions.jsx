import React, { useState } from 'react';
// Data
import { salesAppTypes } from '../../utils/SalesDataUtils';
import { businessInfo } from '../../utils/CompanyDataUtil';

function SelectAppOptions({ selectAppType, thisRef }) {
  const [salesOptions] = useState(salesAppTypes);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (type) => {
    setSelectedOption(type.name);
    selectAppType(type);
  };

  return (
    <div className='grid w-full h-full overflow-hidden p-2 lg:px-4'>
      <div className='grid grid-rows-a1a'>
        <section className='grid pt-4 my-2 text-center'>
          <span className='text-primary block text-lg font-semibold'>
            {businessInfo.companyName} Sales
          </span>
          <h2 className='text-2xl font-bold sm:text-4xl text-text-alt poppins_title'>
            Select your project type!
          </h2>
        </section>
        <div className='grid items-center mt-6 lg:mt-0'>
          <section className='grid w-[80%] h-fit mx-auto items-center relative'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-2'>
              {salesOptions.map((type, index) => {
                const isSelected = selectedOption === type.name;
                const fadeClass =
                  selectedOption && !isSelected ? 'fade-out' : '';
                const moveClass = isSelected ? '' : '';
                return (
                  <section
                    key={index}
                    title={type.label}
                    onClick={() => handleClick(type)}
                    className={`rounded-xl bg-white max-w-[280px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] active:scale-95 cursor-pointer duration-200 ${fadeClass} ${moveClass}`}
                  >
                    <div className='p-6'>
                      <img src={type.image} alt='' />
                    </div>
                  </section>
                );
              })}
            </div>
          </section>
        </div>

          <section ref={thisRef} className='grid my-2 w-full'>
            <div className='grid justify-center pb-4'>
              <ul className='flex gap-6'>
                {salesOptions.map((type, index) => (
                  <li key={index}>
                    <span
                      onClick={() => handleClick(type)}
                      className='poppins_text text-text-main hover:brightness-75 cursor-pointer'
                    >
                      {type.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
      </div>
    </div>
  );
}

export default SelectAppOptions;
