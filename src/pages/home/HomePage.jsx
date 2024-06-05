import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import InfoBox from '../../components/global/InfoBox';
// Utils
import HeaderComponent from '../../components/home/HeaderComponent';
import InformationComponent from '../../components/home/InformationComponent';

function HomePage() {
  let navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(page, { replace: true });
  };

  return (
    <div className='min-h-screen w-full overflow-hidden bg-slate-50'>
      <div className='grid w-full h-full overflow-y-scroll scroll-hidden'>
        {/* Header container */}
        <div
          id='/'
          className='grid grid-rows-reg h-screen w-full overflow-hidden'
        >
          {/* Navigation */}
          <Navbar />

          {/* Header */}
          <HeaderComponent />
        </div>

        {/* Colour block */}
        <div className='w-full h-16 bg-slate-50 overflow-hidden'></div>
        <div className='w-full h-16 bg-slate-300 overflow-hidden'></div>

        {/* Main content */}
        <main className='grid w-full h-full'>
          {/* First section of main */}
          <InformationComponent />

          {/* Colour block */}
          <div className='w-full h-16 bg-slate-300 overflow-hidden'></div>
          <div className='w-full h-16 bg-slate-50 overflow-hidden'></div>

          {/* Second section of main */}
          <section
            id='main-display-2'
            className='grid h-screen bg-red-400 w-full overflow-hidden'
          >
            two
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
