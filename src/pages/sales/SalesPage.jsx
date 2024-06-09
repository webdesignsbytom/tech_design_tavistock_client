import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ServicesComponent from '../../components/portfolio/ServicesComponent';

function SalesPage() {
  return (
    <div className='min-h-screen w-full overflow-hidden'>
      <div className='grid w-full h-full '>
        {/* Header container */}
        <div className='grid grid-rows-reg h-screen w-full overflow-hidden bg-main-bg overflow-y-scroll scrollbar-hidden'>
          {/* Navigation */}
          <Navbar />
          <main>
            SalesPage
            <ServicesComponent />
          </main>
        </div>
      </div>
    </div>
  );
}

export default SalesPage;
