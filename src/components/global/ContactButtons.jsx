import React from 'react';
// Data
import { businessInfo } from '../../utils/CompanyDataUtil';
// Icons
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephoneOutbound } from 'react-icons/bs';

function ContactButtons() {
  return (
    <section className='grid gap-2 h-fit w-full'>
      <div className='px-2 mt-4 max-w-5xl'>
        <a className='text-sm' href={`mailto:${businessInfo.emailAddress}`} aria-label='Email us link'>
          <article className='grid grid-cols-reg gap-2 lg:gap-4 h-full w-full bg-white shadow-md rounded py-2 px-2 lg:px-4 lg:py-4 active:scale-95 duration-200'>
            <section className='grid items-center justify-center'>
              <div className='text-text-main p-2 bg-gray-300 rounded text-center '>
                <MdOutlineEmail size={25} />
              </div>
            </section>
            <section className='grid justify-start poppins_text w-full grid-rows-2 !text-start'>
              <div className='text-purple-main grid font-semibold w-full'>
                Mail me at
              </div>
              <div>{businessInfo.emailAddress}</div>
            </section>
          </article>
        </a>
      </div>

      <div className='px-2 mt-4 max-w-5xl'>
        <a className='text-sm' href={`tel:${businessInfo.phoneNumber}`} aria-label='Call us link'>
          <article className='grid grid-cols-reg gap-2 lg:gap-4 h-full w-full bg-white shadow-md rounded py-2 px-2 lg:px-4 lg:py-4 active:scale-95 duration-200'>
            <section className='grid items-center justify-center'>
              <div className='text-text-main p-2 bg-gray-300 rounded text-center '>
                <BsTelephoneOutbound size={25} />
              </div>
            </section>
            <section className='grid justify-start poppins_text w-full grid-rows-2 !text-start'>
              <div className='text-purple-main grid font-semibold w-full'>
                Call Me On
              </div>
              <div>{businessInfo.phoneNumber}</div>
            </section>
          </article>
        </a>
      </div>
    </section>
  );
}

export default ContactButtons;
