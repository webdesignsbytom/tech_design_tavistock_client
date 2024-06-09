import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Data
import {
  portfolioWebImagesArray,
  portfolioAppImagesArray,
  portfolioCircuitImagesArray,
} from '../../utils/PortfolioDataUtils';
// Components
import ButtonComponent from '../global/ButtonComponent';

function Portfolio() {
  const articleRefs = useRef([]);
  const sectionRef = useRef(null); // Reference for the section
  const [portfolioImages, setPortfolioImages] = useState(
    portfolioWebImagesArray
  );
  const [displayType, setDisplayType] = useState('web'); // Track of the display type
  const [allowAnimation, setAllowAnimation] = useState(true); // Track of the display type
  let navigate = useNavigate();

  useEffect(() => {
    if (allowAnimation) {
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgContainer = entry.target.querySelector('.image-container');
            if (imgContainer) {
              // Check if imgContainer is not null
              imgContainer.classList.add('start-scrolling');
              imgContainer.scrollTo({
                top: imgContainer.scrollHeight,
                behavior: 'smooth',
              });
            }
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      });

      articleRefs.current.forEach((article) => {
        if (article) observer.observe(article);
      });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  const displayTypes = ['web', 'app', 'circuit'];

  const setDisplayContents = (type) => {
    setDisplayType(type); // Set the display type
    if (type === displayTypes[0]) {
      setPortfolioImages(portfolioWebImagesArray);
    } else if (type === displayTypes[1]) {
      setPortfolioImages(portfolioAppImagesArray);
    } else if (type === displayTypes[2]) {
      setPortfolioImages(portfolioCircuitImagesArray);
    }
    if (sectionRef.current) {
      setAllowAnimation(false)
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      resetAnimation()
    }
  };

const resetAnimation = () => {
  setTimeout(() => {
    console.log('AAAAAAA');
    setAllowAnimation(true) 
  }, 700);
}

  const getStyle = () => {
    if (displayType === 'web') {
      return 'border-2 border-black border-solid rounded-lg h-full w-full scrollbar-hidden image-container overflow-x-hidden overflow-y-auto';
    } else if (displayType === 'app') {
      return 'border-2 border-black border-solid rounded-lg h-full w-full overflow-hidden';
    } else if (displayType === 'circuit') {
      return 'border-2 border-black border-solid rounded-lg h-full w-full overflow-hidden';
    } else {
      return '';
    }
  };
  const getImgStyle = () => {
    if (displayType === 'web') {
      return 'h-auto w-full';
    } else if (displayType === 'app') {
      return 'h-full w-full object:contain sm:object-cover';
    } else if (displayType === 'circuit') {
      return 'h-auto w-full';
    } else {
      return '';
    }
  };
  const getContainerStyle = () => {
    if (displayType === 'web') {
      return 'grid overflow-hidden h-[450px] lg:h-[400px] px-2 lg:px-6';
    } else if (displayType === 'app') {
      return 'grid overflow-hidden h-[350px] lg:h-[400px] max-w-[200px] mx-auto px-2 lg:px-6';
    } else if (displayType === 'circuit') {
      return 'grid overflow-hidden h-[450px] lg:h-[400px] px-2 lg:px-6';
    } else {
      return '';
    }
  };

  return (
    <section
      ref={sectionRef}
      id='portfolio-section'
      className='grid relative h-full min-h-screen lg:max-h-screen lg:overflow-hidden mt-10'
    >
      <div className='grid h-full w-full'>
        <div className='grid grid-rows-reg h-full'>
          <section className='my-8 h-fit'>
            <div className='text-center'>
              <span className='text-sm font-semibold'>Portfolio and Demos</span>
            </div>
            <h3 className='poppins_title text-4xl text-text-alt text-center'>
              Our Products
            </h3>
          </section>

          <section className='grid h-full w-[85%] mx-auto px-1'>
            <div className='grid md:grid-cols-3 h-fit gap-12 mt-6'>
              {portfolioImages.map((image, index) => {
                return (
                  <article
                    key={index}
                    className={getContainerStyle()}
                    ref={(el) => (articleRefs.current[index] = el)}
                  >
                    <div className={getStyle()}>
                      <img
                        src={image.image}
                        alt={image.alt}
                        className={getImgStyle()}
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Cta buttons */}
            <section className='grid w-full h-fit'>
              <div className='grid grid-cols-3 px-4 sm:px-0 mt-10 gap-2 overflow-hidden'>
                <div className='grid w-full justify-items-center'>
                  <ButtonComponent
                    label='See Websites'
                    onClick={() => setDisplayContents(displayTypes[0])}
                    type='secondary'
                  />
                </div>
                <div className='grid w-full justify-items-center'>
                  <ButtonComponent
                    label='See Apps'
                    onClick={() => setDisplayContents(displayTypes[1])}
                    type='primary'
                  />
                </div>
                <div className='grid w-full justify-items-center'>
                  <ButtonComponent
                    label='See Circuits'
                    onClick={() => setDisplayContents(displayTypes[2])}
                    type='primary'
                  />
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
