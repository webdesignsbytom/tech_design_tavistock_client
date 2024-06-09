import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Utils
import HeaderComponent from '../../components/home/HeaderComponent';
import InformationComponent from '../../components/home/InformationComponent';
import PortfolioComponent from '../../components/home/PortfolioComponent';
import ReviewsComponent from '../../components/reviews/ReviewsComponent';
import ServicesComponent from '../../components/portfolio/ServicesComponent';
import Header from '../../components/home/Header';

function HomePage() {
  return (
    <div className='min-h-screen w-full overflow-hidden bg-main-bg'>
      <div className='grid w-full h-full overflow-y-scroll scroll-hidden'>
        {/* Header container */}
        <div
          id='/'
          className='grid grid-rows-reg mb-4'
        >
          {/* Navigation */}
          <Navbar />
          {/* Header */}
          {/* <HeaderComponent /> */}
          <Header />
        </div>

        {/* Colour block */}
        {/* <div className='w-full h-16 bg-slate-50 overflow-hidden'></div>
        <div className='w-full h-16 bg-slate-300 overflow-hidden'></div> */}

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
