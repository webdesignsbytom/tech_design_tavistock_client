import React, { useEffect, useRef, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ServicesComponent from '../../components/portfolio/ServicesComponent';
import PurchaseOptions from '../../components/sales/PurchaseOptions';
import SelectAppOptions from '../../components/sales/SelectAppOptions';
// Data
import { salesAppTypes } from '../../utils/SalesDataUtils';
import SalesOptionCard from '../../components/sales/SalesOptionCard';

function SalesPage() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const [salesOptionSelected, setSalesOptionSelected] = useState({});

  const selectAppType = (appType) => {
    setSalesOptionSelected(appType);

    
    setTimeout(() => {
      animateChange();
    }, 3000);
  };

  const animateChange = () => {
    const sectionElement = sectionRef.current;
    const textElement = textRef.current;

    sectionElement.classList.remove('hidden-container')
    textElement.classList.add('hidden-container')
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
            <div ref={sectionRef} className='hidden-container mb-10'>
              <SalesOptionCard type={salesOptionSelected} />
            </div>
          </main>

      </div>
    </div>
  );
}

export default SalesPage;
