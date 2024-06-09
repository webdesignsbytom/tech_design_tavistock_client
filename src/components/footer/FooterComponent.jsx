import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import SocialBar from '../social/SocialBar';
// Data
import { businessInfo } from '../../utils/CompanyDataUtil';
import { navbarLinksArray } from '../../utils/NavbarDataUtils';
// Images
import Logo from '../../assets/images/logos/wdbt-white.svg';

function FooterComponent() {
  const today = new Date();

  const [navLinks] = useState(navbarLinksArray)

  const contactDetails = [
    { type: 'Phone', value: businessInfo.phoneNumber },
    { type: 'Email', value: businessInfo.emailAddress },
  ];

  return (
    <footer className='grid h-fit w-full'>
      <div className='grid bg-alt-colour h-fit text-white pt-4'>
        {/* Large */}
        <div className='grid grid-rows-rev h-full'>
          <section className='hidden lg:grid lg:grid-cols-3 h-full px-4'>
            <section className='grid'>
              <h4 className='underline text-left'>Site Navigation</h4>
              <section>
                <ul className='grid w-full justify-between px-4 mt-4 mb-6'>
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            </section>

            <section className='flex w-full px-2 justify-center'>
              <img
                src={Logo}
                className='w-20'
                alt='footer logo for web design by tom'
              />
            </section>

            <article className='pt-5'>
              <h3 className='text-right underline'>Contact</h3>
              <div className='grid text-right mt-4'>
                {contactDetails.map((contact, index) => (
                  <p key={index}>
                    {contact.type}: {contact.value}
                  </p>
                ))}
              </div>
            </article>
          </section>

          <div className='grid h-fit'>
            <section className='flex justify-center my-1'>
              <SocialBar
                background={'bg-footer-colour dark:bg-main-colour'}
                icons={'text-white dark:text-gray-300'}
              />
            </section>

            <section className='lg:hidden'>
              <section>
                <ul className='flex w-full justify-between px-4 mt-4 mb-6'>
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            </section>

            <section className='flex w-full py-2 lg:hidden justify-center'>
              <img
                src={Logo}
                className='w-10'
                alt='footer logo for web design by tom'
              />
            </section>

            <section className='mb-4'>
              <p className='text-center'>
                Copyright webdesignsbytom{' '}
                <span className='font-bold'>&copy;</span> {today.getFullYear()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
