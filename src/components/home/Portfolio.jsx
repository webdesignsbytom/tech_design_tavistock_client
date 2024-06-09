import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import ButtonComponent from '../global/ButtonComponent';
// Data
import {
  portfolioWebImagesArray,
  portfolioAppImagesArray,
  portfolioCircuitImagesArray,
} from '../../utils/PortfolioDataUtils';

function Portfolio() {
  const articleRefs = useRef([]);
  const sectionRef = useRef(null); // Reference for the section
  const [portfolioImages, setPortfolioImages] = useState(
    portfolioWebImagesArray
  );
  const [displayType, setDisplayType] = useState('web'); // Track the display type
  const [webFirstView, setWebFirstView] = useState(true); // Track if the web portfolio has been viewed
  let navigate = useNavigate();

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imgContainer = entry.target.querySelector('.image-container');
          if (imgContainer) {
            // Check if imgContainer is not null and it's the web portfolio's first view
            if (webFirstView && displayType === 'web') {
              imgContainer.classList.add('start-scrolling');
              imgContainer.scrollTo({
                top: imgContainer.scrollHeight,
                behavior: 'smooth',
              });
            }
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
  }, [displayType, webFirstView]);

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  const displayTypes = ['web', 'app', 'circuit'];

  const setDisplayContents = (type) => {
    setDisplayType(type); // Set the display type
    if (type === displayTypes[0]) {
      setPortfolioImages(portfolioWebImagesArray);
      if (webFirstView) {
        setWebFirstView(false); // Set to false after the first view
      }
    } else if (type === displayTypes[1]) {
      setPortfolioImages(portfolioAppImagesArray);
    } else if (type === displayTypes[2]) {
      setPortfolioImages(portfolioCircuitImagesArray);
    }
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      return 'grid overflow-hidden h-[350px] lg:h-[400px] max-w-[210px] mx-auto lg:px-6';
    } else if (displayType === 'circuit') {
      return 'grid overflow-hidden h-[450px] lg:h-[400px] px-2 lg:px-6';
    } else {
      return '';
    }
  };

  const getMainContainerStyle = () => {
    if (displayType === 'web') {
      return 'grid md:grid-cols-3 h-fit gap-12 mt-6';
    } else if (displayType === 'app') {
      return 'grid grid-cols-3 h-fit gap-2 lg:gap-4 mt-6';
    } else if (displayType === 'circuit') {
      return 'grid md:grid-cols-3 h-fit gap-12 mt-6';
    } else {
      return '';
    }
  };

  const getButtonContainerStyle = () => {
    if (displayType === 'app') {
      return 'grid grid-cols-3 md:px-8 mt-4 gap-2 overflow-hidden';
    } else {
      return 'grid grid-cols-3 md:px-8 mt-10 gap-2 overflow-hidden';
    }
  };

  return (
    <section
      ref={sectionRef}
      id='portfolio-section'
      className='grid relative h-full min-h-screen lg:max-h-screen mt-10'
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

          <section className='grid h-full w-[85%] mx-auto'>
            <div className={getMainContainerStyle()}>
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
              <div className={getButtonContainerStyle()}>
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
          <section className='grid w-full mx-auto mt-6'>
            <div className='grid w-full mx-auto justify-items-center'>
              <ButtonComponent
                label='Contact Now'
                onClick={() => navigateToPage('/contact')}
                type='primary'
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
