import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
// Images
import Logo from '../../assets/images/logos/tech-design-tavistock-logo-white.svg';
// Components
import { navbarLinksArray } from '../../utils/NavbarDataUtils';
// Icons
import { IoMdMenu } from 'react-icons/io';
// Hooks
import useNavigateToPage from '../../hooks/useNavigateToPage';

function Navbar() {
  const [navOptions] = useState(navbarLinksArray);
  const [phoneNavIsOpen, setPhoneNavIsOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const animationInProgress = useRef(false);

  const navigateToPage = useNavigateToPage();

  const location = useLocation();

  useEffect(() => {
    // Reset animation class when location changes
    setAnimationClass('');
  }, [location]);

  const openPhoneNav = () => {
    if (animationInProgress.current) {
      return;
    }

    animationInProgress.current = true;

    if (phoneNavIsOpen) {
      setAnimationClass('animate_close_nav');
      setTimeout(() => {
        setPhoneNavIsOpen(false);
        animationInProgress.current = false;
      }, 1200); // Duration of the closeNav animation
    } else {
      setAnimationClass('animate_open_nav');
      setPhoneNavIsOpen(true);
      setTimeout(() => {
        animationInProgress.current = false;
      }, 1200); // Duration of the openNav animation
    }
  };

  return (
    <div className='relative w-full h-[62px] md:overflow-hidden'>
      <nav className='grid grid-cols-reg relative z-50 w-full h-full bg-alt-colour dark:bg-dark-alt-colour'>
        <section className='grid w-fit pl-4 items-center'>
          <div className='grid h-fit items-center justify-center'>
            <img
              src={Logo}
              onClick={() => navigateToPage('/')}
              alt='Tech design by Tom logo'
              className='w-12 h-12 cursor-pointer active:scale-95'
              loading='lazy'
            />
          </div>
        </section>
        <section className='grid'>
          {/* Phone screen */}
          <section className='grid md:hidden pr-4 items-center justify-end h-full'>
            <button
              onClick={openPhoneNav}
              aria-label='Toggle navigation menu'
              className='grid w-fit p-1 h-fit items-center justify-center text-4xl text-white dark:text-dark-text-light active:brightness-90'
            >
              <IoMdMenu className='active:scale-50 ' />
            </button>
          </section>

          {/* Large screen */}
          <div className='hidden md:grid justify-end items-center pr-8'>
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
                      aria-label={`Link to page ${item.label}`}
                      className={`grid items-end h-fit ${
                        isActive ? 'text-purple-main dark:text-purple-dark' : 'text-white dark:text-dark-text-light'
                      } duration-300`}
                    >
                      <div className='grid justify-center items-end h-fit'>
                        <span className={`text-xs`}>{item.imageUrl}</span>
                      </div>
                      <div className='text-center h-fit'>
                        <span className={`text-base`}>{item.label}</span>
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
        <div className={`grid ${animationClass} z-40 absolute h-full w-full`}>
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
                      isActive ? 'text-purple-main' : 'text-white'
                    } duration-300`}
                  >
                    <div className='grid justify-center items-end h-fit'>
                      <span className={`text-xs`}>{item.imageUrl}</span>
                    </div>
                    <div className='text-center h-fit'>
                      <span className={`text-lg`}>{item.label}</span>
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
