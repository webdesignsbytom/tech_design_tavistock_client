import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ServicesComponent from '../../components/portfolio/ServicesComponent';
import PurchaseOptions from '../../components/sales/PurchaseOptions';
import SelectAppOptions from '../../components/sales/SelectAppOptions';
// Data
import { salesAppTypes } from '../../utils/SalesDataUtils';

function SalesPage() {
  const [salesOptionSelected, setSalesOptionSelected] = useState({});

  const selectAppType = (appType) => {
    console.log('AA');
    setSalesOptionSelected(appType);
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
          <SelectAppOptions selectAppType={selectAppType} />
        </div>
        <main>
          {/* <PurchaseOptions /> */}
          {/* <ServicesComponent /> */}
        </main>
      </div>
    </div>
  );
}

export default SalesPage;
