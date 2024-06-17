import React, { useState } from 'react';
// Icons
import { BsCheck2Circle } from 'react-icons/bs';
// Data
import { servicesDataArray } from '../../utils/SalesDataUtils';
// Components
import ComponentTitles from '../global/ComponentTitles';

function ServicesComponent() {
  const [servicesData] = useState(servicesDataArray);

  return (
    <section id='experience-section' className='grid mb-10 mt-10'>
      <section className='text-center py-8'>
        <ComponentTitles
          title={'Services and Assistance'}
          subtitle={'What Is Offered'}
        />
      </section>

      <section className='grid w-full sm:w-2/3 lg:w-[80%] mx-auto mt-8'>
        <div className='grid lg:grid-cols-3 gap-8 h-full px-4'>
          {servicesData.map((service, index) => (
            <article
              key={index}
              className='grid grid-rows-reg bg-alt-colour hover:bg-main-bg hover:dark:bg-dark-main-bg duration-300 hover:purple-main-colour text-white dark:text-dark-text-light rounded-xl text-center p-1 lg:p-2 w-full h-full shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.064),_0_12.5px_10px_rgba(0,_0,_0,_0.16),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.18)]'
            >
              <div
                className={`mb-1 border-4 border-slate-300 dark:border-dark-alt-colour hover:border-[${service.borderColor}] bg-alt border-solid rounded-lg h-fit`}
              >
                <h3 className='p-2 font-semibold text-lg'>{service.title}</h3>
              </div>

              <ul
                className={`grid gap-2 p-2 lg:p-4 w-full h-full border-4 rounded-lg border-slate-300 dark:border-dark-alt-colour hover:border-${service.borderColor} border-solid`}
              >
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className='grid grid-cols-reg w-full gap-2 items-center'
                  >
                    <div className='text-purple-main dark:text-purple-dark'>
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
