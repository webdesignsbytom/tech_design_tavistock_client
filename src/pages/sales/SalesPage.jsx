import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ServicesComponent from '../../components/portfolio/ServicesComponent';
import PurchaseOptions from '../../components/sales/PurchaseOptions';
import SelectAppOptions from '../../components/sales/SelectAppOptions';

function SalesPage() {
  return (
    <div className='grid'>
      <div className='grid'>
        <div id='/' className='grid min-h-screen lg:max-h-screen grid-rows-reg overflow-hidden'>
          {/* Navigation */}
          <Navbar />
          <SelectAppOptions />
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
