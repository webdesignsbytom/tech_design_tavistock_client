import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
// Images
import Logo from '../../assets/images/logos/wdbt-white.svg';
// Components
import { navbarLinksArray } from '../../utils/NavbarDataUtils';
// Icons
import { IoMdMenu } from 'react-icons/io';

function Navbar() {
  const [navOptions] = useState(navbarLinksArray);
  const [phoneNavIsOpen, setPhoneNavIsOpen] = useState(false);
  const location = useLocation();
  console.log('location: ', location);

  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  const openPhoneNav = () => {
    setPhoneNavIsOpen(!phoneNavIsOpen);
  };

  return (
    <div className='relative w-full h-[62px] sm:overflow-hidden'>
      <nav className='grid grid-cols-reg w-full h-full bg-alt-colour'>
        <section className='grid w-fit pl-4'>
          <div className='grid items-center justify-center active:scale-95'>
            <img
              src={Logo}
              onClick={() => navigateToPage('/')}
              alt='Tech design by Tom logo'
              className='w-12 h-12 cursor-pointer'
            />
          </div>
        </section>
        <section className='grid'>
          {/* Phone screen */}
          <section className='grid sm:hidden pr-4 items-center justify-end h-full'>
            <div
              onClick={openPhoneNav}
              className='grid w-fit h-fit items-center justify-center text-4xl text-white active:scale-50 active:brightness-90'
            >
              <IoMdMenu />
            </div>
          </section>
          {/* Large screen */}
          <div className='hidden sm:grid justify-end items-center pr-8'>
            <ul className='grid gap-5 grid-cols-5 w-fit'>
              {navOptions.map((item, index) => {
                const isActive = location.pathname === item.url;
                return (
                  <li
                    key={index}
                    className={`grid h-fit w-full px-4 leading-4 image-shadow cursor-pointer hover:brightness-75`}
                  >
                    <Link
                      to={item.url}
                      className={`grid items-end h-fit ${
                        isActive ? 'text-red-700' : 'text-white'
                      } duration-300`}
                    >
                      <div className='grid justify-center items-end h-fit'>
                        <span className={`text-xs`}>{item.imageUrl}</span>
                      </div>
                      <div className='text-center h-fit'>
                        <span className={`text-base`}>{item.title}</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </nav>

      {phoneNavIsOpen && (
        <div className='grid z-50 absolute h-full w-full'>
          <div className='grid gap-6 bg-alt-colour h-full pt-4 pb-10'>
            {navOptions.map((item, index) => {
              const isActive = location.pathname === item.url;
              return (
                <li
                  key={index}
                  className={`grid h-fit w-full px-4 leading-4 image-shadow cursor-pointer hover:brightness-75`}
                >
                  <Link
                    to={item.url}
                    className={`grid items-end h-fit ${
                      isActive ? 'text-red-700' : 'text-white'
                    } duration-300`}
                  >
                    <div className='grid justify-center items-end h-fit'>
                      <span className={`text-xs`}>{item.imageUrl}</span>
                    </div>
                    <div className='text-center h-fit'>
                      <span className={`text-lg`}>{item.title}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
