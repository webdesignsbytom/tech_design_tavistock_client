import React, { useEffect, useState } from 'react';
// Components
import ButtonComponent from '../global/ButtonComponent';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function SalesOptionCard({ type }) {
  const [showAll, setShowAll] = useState(false);
  const [displayedServices, setDisplayedServices] = useState([]);
  const navigateToPage = useNavigateToPage();

  useEffect(() => {
    if (type && type.services) {
      setDisplayedServices(showAll ? type.services : type.services.slice(0, 5));
    }
  }, [showAll, type]);

  return (
    <div className='grid lg:w-3/4 mx-auto px-4'>
      <section className='grid gap-4 px-2 py-4 my-4 bg-white shadow-lg rounded-lg'>
        <div className='grid bg-white shadow-lg rounded-lg px-2 py-2'>
          <article className='grid grid-flow-col items-center h-fit overflow-hidden'>
            <div className='w-full'>
              <h2 className='poppins_title text-text-alt text-2xl pl-2'>
                {type.label} Project
              </h2>
            </div>
            {/* Image */}
            <section className='grid justify-end'>
              <div className='lg:p-6 w-12 h-12 rounded-xl m-1 shadow-lg'>
                <img src={type.image} alt='object-cover' />
              </div>
            </section>
          </article>
        </div>
        <article className='grid '>
          <div className='grid gap-8 bg-white shadow-lg rounded-lg px-4 py-6 lg:px-8 poppins_base'>
            <div>
              <article>{type?.content?.para1}</article>
            </div>
            <div>
              <article>{type?.content?.para2}</article>
            </div>
          </div>
        </article>

        <article className='grid '>
          <div className='grid bg-white shadow-lg rounded-lg px-2 pb-2 pt-4'>
            <div>
            <h3 className='poppins_title text-text-alt text-center text-xl mb-2'>
                Services Offered
              </h3>
            </div>
            <ul className='grid justify-items-center'>
              {displayedServices?.map((service, index) => (
                <li key={index}>
                  <span
                    className={`poppins_text ${index % 2 && 'text-text-main'}`}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            <div className='grid mx-auto w-full justify-items-center mt-4 mb-2'>
              <ButtonComponent
                label={showAll ? 'Show Less' : 'Show More'}
                onClick={() => setShowAll(!showAll)}
                type='primary'
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default SalesOptionCard;
