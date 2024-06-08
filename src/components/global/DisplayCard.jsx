import React from 'react';
// Icons
import { BsCheck2Circle } from 'react-icons/bs';

function DisplayCard({ title, price, listItems, buttonId, buttonColor }) {
  return (
    <div>
      <div className='p-8 bg-gray-900 rounded'>
        <div className='mb-4 text-center'>
          <p className='text-xl font-medium tracking-wide text-white'>
            {title}
          </p>
          <p className='text-sm font-semibold text-white dark:text-white'>
            from
          </p>
          <div className='flex items-center justify-center'>
            <p className='mr-2 text-5xl font-semibold text-white lg:text-6xl'>
              £{price}
            </p>
          </div>
        </div>
        <ul className='mb-8 space-y-2'>
          {listItems.map((item, index) => (
            <ListItem key={index} text={item.text} />
          ))}
        </ul>
        <button
          id={buttonId}
          className={`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${buttonColor} focus:shadow-outline focus:outline-none`}
        >
          Get Now
        </button>
      </div>
      <div className='w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75' />
      <div className='w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50' />
      <div className='w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25' />
    </div>
  );
}

// ListItem Component
const ListItem = ({ text }) => (
  <li className='flex items-center'>
    <article className='mr-3 text-white'>
      <BsCheck2Circle size={30} />
    </article>
    <p className='font-medium text-gray-300'>{text}</p>
  </li>
);

export default DisplayCard;
