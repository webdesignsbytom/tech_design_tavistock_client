import React, { useEffect, useState } from 'react';
// Components
import ButtonComponent from '../global/ButtonComponent';
// Data
import { salesAppTypes } from '../../utils/SalesDataUtils';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function SalesOptionCard({ type, changeDisplayedProduct }) {
  const [showAll, setShowAll] = useState(false);
  const [displayedServices, setDisplayedServices] = useState([]);
  const [salesOptions] = useState(salesAppTypes);

  const navigateToPage = useNavigateToPage();

  useEffect(() => {
    if (type && type.services) {
      setDisplayedServices(showAll ? type.services : type.services.slice(0, 5));
    }
  }, [showAll, type]);

  return (
    <div className='grid relative lg:w-3/4 mx-auto px-4 h-full'>
      <section className='grid lg:grid-rows-reg gap-4 px-2 lg:px-4 py-4 my-auto lg:h-[85%] overflow-hidden bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg'>
        <div className='grid bg-alt-colour h-fit shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg px-2 py-2'>
          <article className='grid grid-flow-col items-center h-fit overflow-hidden'>
            <div className='w-full'>
              <h2 className='poppins_title text-text-alt text-2xl pl-2'>
                {type.label} Project
              </h2>
            </div>
            <section className='grid grid-flow-col justify-end'>
              <section className='hidden sm:grid items-center pr-4 w-full'>
                <div className='grid justify-center'>
                  <ul className='flex gap-6'>
                    {salesOptions.map((type, index) => (
                      <li key={index}>
                        <span
                          onClick={() => changeDisplayedProduct(type)}
                          className='poppins_text text-text-main hover:brightness-75 cursor-pointer'
                        >
                          {type.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              {/* Image */}
              <div className='p-2 bg-white w-12 h-12 rounded-xl m-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <img src={type.image} alt='object-cover' />
              </div>
            </section>
          </article>
        </div>
        <section className='grid lg:grid-cols-2 gap-4 h-full'>
          <article className='grid h-full'>
            <div className='grid text-sm h-full bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg px-4 py-6 lg:px-8 poppins_base'>
              <div className='grid gap-4'>
                <div>
                  <article>
                    <p>{type?.content?.para1}</p>
                  </article>
                </div>
                <div>
                  <article>
                    <p>{type?.content?.para2}</p>
                  </article>
                </div>
              </div>
            </div>
          </article>

          <article className='grid '>
            <div className='grid bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg px-2 lg:px-4 pb-2 pt-4'>
              <div>
                <h3 className='poppins_title text-text-alt text-center text-xl lg:text-2xl mb-2'>
                  Services Offered
                </h3>
              </div>
              <div className='grid lg:overflow-y-auto h-full lg:max-h-[300px] overflow-x-hidden'>
                <ul className='grid justify-items-center '>
                  {displayedServices?.map((service, index) => (
                    <li key={index} className='text-center'>
                      <span
                        className={`poppins_text ${
                          index % 2 && 'text-text-main'
                        }`}
                      >
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='grid mx-auto w-full h-fit gap-2 mt-4 mb-2'>
                <div className='grid w-full justify-items-center'>
                  <ButtonComponent
                    label={showAll ? 'Show Less' : 'Show More'}
                    onClick={() => setShowAll(!showAll)}
                    type={showAll ? 'secondary' : 'primary'}
                  />
                </div>
                <div className='grid w-full justify-items-center'>
                  <ButtonComponent
                    label='Contact Now'
                    onClick={() => navigateToPage('/contact')}
                    type='secondary'
                  />
                </div>
              </div>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}

export default SalesOptionCard;
