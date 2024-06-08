import React, { useState } from 'react';
// Icons
import { BsCheck2Circle } from 'react-icons/bs';
// Data
import { servicesDataArray } from '../../utils/SalesDataUtils';

function ServicesComponent() {
  const [servicesData] = useState(servicesDataArray)

  return (
    <section
      id='experience'
      className='lg:h-[90vh] lg:max-h-screen lg:overflow-hidden grid lg:grid-rows-reg mb-20'
    >
      <section className='text-center mt-12 mb-2 dark:text-gray-400'>
        <h5 className='font-semibold'>What I Offer</h5>
        <h2 className='text-2xl font-bold'>Services and Assistance</h2>
      </section>

      <section className='my-auto grid lg:grid-cols-3 gap-8 mx-4 lg:mx-8'>
        {servicesData.map((service, index) => (
          <article key={index} className='bg-alt-colour dark:bg-gray-500 text-white rounded-xl text-center p-1 w-full h-min'>
            <div className={`mb-1 border-4 ${service.borderColor} bg-alt border-solid rounded-lg`}>
              <h3 className='p-2 font-semibold text-lg'>{service.title}</h3>
            </div>

            <ul className={`grid gap-2 p-2 w-full border-4 bg-alt rounded-lg ${service.borderColor} border-solid`}>
              {service.items.map((item, idx) => (
                <li key={idx} className='grid grid-cols-reg w-full gap-2 items-center'>
                  <div>
                    <BsCheck2Circle size={30} />
                  </div>
                  <p className='ml-2'>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </section>
  );
}

export default ServicesComponent;
