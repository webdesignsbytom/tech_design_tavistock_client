import React, { useRef, useState } from 'react';
import ButtonComponent from '../global/ButtonComponent';
import {
  portfolioWebImagesArray,
  portfolioAppImagesArray,
  portfolioCircuitImagesArray,
} from '../../utils/PortfolioDataUtils';
import ComponentTitles from '../global/ComponentTitles';

function PortfolioComponent() {
  const articleRefs = useRef([]);
  const sectionRef = useRef(null);
  const [portfolioImages, setPortfolioImages] = useState(
    portfolioWebImagesArray
  );
  const [displayType, setDisplayType] = useState('web');


  const displayTypes = ['web', 'app', 'circuit'];

  const setDisplayContents = (type) => {
    setDisplayType(type);
    if (type === displayTypes[0]) {
      setPortfolioImages(portfolioWebImagesArray);
    } else if (type === displayTypes[1]) {
      setPortfolioImages(portfolioAppImagesArray);
    } else if (type === displayTypes[2]) {
      setPortfolioImages(portfolioCircuitImagesArray);
    }
  };

  const getStyle = () => {
    if (displayType === 'web') {
      return 'rounded-bl-lg rounded-br-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  h-full w-full scrollbar-hidden overflow-x-hidden overflow-y-auto image-container';
    } else if (displayType === 'app') {
      return 'rounded-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white h-full w-full overflow-hidden';
    } else if (displayType === 'circuit') {
      return 'rounded-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] outline outline-2 outline-gray-300 h-full w-full overflow-hidden';
    } else {
      return '';
    }
  };

  const getImgStyle = () => {
    if (displayType === 'web') {
      return 'h-auto w-full';
    } else if (displayType === 'app') {
      return 'h-full w-full object-cover';
    } else if (displayType === 'circuit') {
      return 'h-full w-full object-cover';
    } else {
      return '';
    }
  };

  const getContainerStyle = () => {
    if (displayType === 'web') {
      return 'grid overflow-hidden h-[400px] lg:h-[500px] 2xl:lg:h-[530px] px-2 py-6 lg:px-6 opening-animation';
    } else if (displayType === 'app') {
      return 'grid overflow-hidden py-6 h-[325px] h-full w-full max-w-[190px] lg:max-w-[300px] mx-auto lg:px-6 opening-animation';
    } else if (displayType === 'circuit') {
      return 'grid overflow-hidden py-6 h-[230px] lg:h-[250px] 2xl:lg:h-[280px] px-2 lg:px-6 opening-animation';
    } else {
      return '';
    }
  };

  const getMainContainerStyle = () => {
    if (displayType === 'web') {
      return 'grid md:grid-cols-3 h-fit gap-8 mt-2';
    } else if (displayType === 'app') {
      return 'grid grid-cols-3 h-fit gap-2 lg:gap-4 mt-2';
    } else if (displayType === 'circuit') {
      return 'grid md:grid-rows-2 md:grid-cols-3 h-fit gap-x-8 gap-y-4 mt-2';
    } else {
      return '';
    }
  };

  return (
    <section
      ref={sectionRef}
      id='portfolio-section'
      className='grid relative h-full min-h-screen lg:max-h-screen mt-10 lg:mb-28'
    >
      <div className='grid h-full w-full'>
        <div className='grid grid-rows-reg h-full'>
          <section className='my-8 h-fit'>
            <ComponentTitles
              title={'Developer Products'}
              subtitle={'Portfolio and Demos'}
            />

            <article className='mt-8 grid'>
              <div className='grid w-full px-4 sm:px-8 lg:px-0 lg:w-1/2 mx-auto'>
                <p className='text-text-main poppins_text'>
                  We have prepared a number of sample product for you to view
                  and be inspired by. Use the buttons to navigate between the
                  device types. Hover over or use your mouse to scroll over any
                  website image. Click on any image to be taken to a live
                  example.
                </p>
              </div>
            </article>
          </section>

          <section className='grid h-full w-[85%] mx-auto'>
            <section className='grid h-fit w-full'>
              <div className='grid md:justify-end'>
                <div className='grid grid-cols-3 bg-gray-300 gap-2 p-2 w-full md:w-fit mt-6'>
                  <ButtonComponent
                    label='Websites'
                    onClick={() => setDisplayContents(displayTypes[0])}
                    type={
                      displayType === displayTypes[0]
                        ? 'selected'
                        : 'unselected'
                    }
                  />
                  <ButtonComponent
                    label='Apps'
                    onClick={() => setDisplayContents(displayTypes[1])}
                    type={
                      displayType === displayTypes[1]
                        ? 'selected'
                        : 'unselected'
                    }
                  />
                  <ButtonComponent
                    label='Circuits'
                    onClick={() => setDisplayContents(displayTypes[2])}
                    type={
                      displayType === displayTypes[2]
                        ? 'selected'
                        : 'unselected'
                    }
                  />
                </div>
              </div>
            </section>

            <div key={displayType} className={getMainContainerStyle()}>
              {portfolioImages.map((image, index) => {
                return (
                  <article
                    key={index}
                    className={getContainerStyle()}
                    ref={(el) => (articleRefs.current[index] = el)}
                  >
                    <div className={getStyle()}>
                      {displayType === 'app' && index === 1 ? (
                        <video
                          src={image.video}
                          className={getImgStyle()}
                          autoPlay
                          loading="lazy"
                          muted
                          autoFocus={true}
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={image.image}
                          alt={image.alt}
                          className={getImgStyle()}
                          loading='lazy'
                        />
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default PortfolioComponent;
