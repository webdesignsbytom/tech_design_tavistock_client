import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Utils
import HeaderComponent from '../../components/home/HeaderComponent';
import InformationComponent from '../../components/home/InformationComponent';
import PortfolioComponent from '../../components/home/PortfolioComponent';
import ReviewsComponent from '../../components/reviews/ReviewsComponent';
import ServicesComponent from '../../components/portfolio/ServicesComponent';

function HomePage() {
  return (
    <div className='min-h-screen w-full overflow-hidden bg-slate-50'>
      <div className='grid w-full h-full overflow-y-scroll scroll-hidden'>
        {/* Header container */}
        <div
          id='/'
          className='grid mb-24 sm:mb-0 grid-rows-reg h-screen w-full sm:overflow-hidden'
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
          <PortfolioComponent />

          {/* Colour block */}
          <div className='w-full h-16 bg-slate-50 overflow-hidden'></div>

          <ServicesComponent />
          <ReviewsComponent />
          {/* Second section of main */}
        </main>
      </div>
    </div>
  );
}

export default HomePage;
