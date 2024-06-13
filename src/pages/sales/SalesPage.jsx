import React, { useRef, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import SelectAppOptions from '../../components/sales/SelectAppOptions';
import SalesOptionCard from '../../components/sales/SalesOptionCard';
import ContactCta from '../../components/global/ContactCta';

function SalesPage() {
  const sectionRef = useRef(null);
  const contactRef = useRef(null);
  const textRef = useRef(null);
  const [salesOptionSelected, setSalesOptionSelected] = useState({});

  const selectAppType = (appType) => {
    setSalesOptionSelected(appType);

    setTimeout(() => {
      animateChange();
    }, 2000);
  };

  const animateChange = () => {
    const sectionElement = sectionRef.current;
    const textElement = textRef.current;
    const contactElement = contactRef.current;

    sectionElement.classList.remove('hidden-container')
    textElement.classList.add('hidden-container')
    contactElement.classList.remove('hidden-container')
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const changeDisplayedProduct = (option) => {
    setSalesOptionSelected(option)
  }
  
  return (
    <div className='grid'>
      <div className='grid bg-shape-bg-1 bg-no-repeat bg-cover'>
        <div
          id='/'
          className='grid min-h-screen lg:max-h-screen grid-rows-reg overflow-hidden'
        >
          {/* Navigation */}
          <Navbar />
          <SelectAppOptions
            selectAppType={selectAppType}
            salesOptionSelected={salesOptionSelected}
            thisRef={textRef}
          />
        </div>
          <main>
            <div ref={sectionRef} className='hidden-container mb-10 h-screen'>
              <SalesOptionCard type={salesOptionSelected} changeDisplayedProduct={changeDisplayedProduct} />
            </div>

            <div ref={contactRef} className='my-8 hidden-container'>
              <ContactCta />
            </div>
          </main>

      </div>
    </div>
  );
}

export default SalesPage;
