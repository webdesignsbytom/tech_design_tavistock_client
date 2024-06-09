import React, { useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { servicesDataArray } from '../../utils/SalesDataUtils';

function ServicesComponent() {
  const [servicesData] = useState(servicesDataArray);

  return (
    <section id='experience' className='grid mb-10 mt-10'>
      <section className='text-center py-8 dark:text-gray-400'>
        <h5 className='font-semibold'>What Is Offered</h5>
        <h2 className='poppins_title text-4xl text-text-alt text-center'>Services and Assistance</h2>
      </section>

      <section className='grid w-full sm:w-2/3 lg:w-[80%] mx-auto mt-8'>
        <div className='grid lg:grid-cols-3 gap-8 h-full px-4'>
          {servicesData.map((service, index) => (
            <article key={index} className='grid grid-rows-reg bg-alt-colour hover:bg-main-bg duration-300 hover:text-alt-colour text-white rounded-xl text-center p-1 lg:p-2 w-full h-full shadow-xl'>
              <div className={`mb-1 border-4 border-slate-300 hover:border-[${service.borderColor}] bg-alt border-solid rounded-lg h-fit`}>
                <h3 className='p-2 font-semibold text-lg'>{service.title}</h3>
              </div>

              <ul className={`grid gap-2 p-2 lg:p-4 w-full h-full border-4 rounded-lg border-slate-300 hover:border-${service.borderColor} border-solid`}>
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
        </div>
      </section>
    </section>
  );
}

export default ServicesComponent;
