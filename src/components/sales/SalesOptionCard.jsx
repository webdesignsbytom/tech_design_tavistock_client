import React, { useEffect, useState } from 'react';

function SalesOptionCard({ type }) {
  const [showAll, setShowAll] = useState(false);
  const [displayedServices, setDisplayedServices] = useState([]);

  useEffect(() => {
    if (type && type.services) {
      setDisplayedServices(
        showAll ? type.services : type.services.slice(0, 5)
      );
    }
  }, [showAll, type]);
  return (
    <section className='grid gap-4 px-2 my-4'>
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
        <div className='grid gap-8 bg-white shadow-lg rounded-lg px-4 py-6 poppins_base'>
          <div>
            <article>{type?.content?.para1}</article>
          </div>
          <div>
            <article>{type?.content?.para2}</article>
          </div>
        </div>
      </article>

      <article className='grid '>
        <div className='grid bg-white shadow-lg rounded-lg px-2 py-2'>
          <ul>
            {displayedServices?.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <button
            className='mt-4 bg-blue-500 text-white py-2 px-4 rounded duration-500'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </article>
    </section>
  );
}

export default SalesOptionCard;
