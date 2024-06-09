import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import InformationComponent from '../../components/home/InformationComponent';
import ReviewsComponent from '../../components/reviews/ReviewsComponent';
import ServicesComponent from '../../components/portfolio/ServicesComponent';
import Header from '../../components/home/Header';
import Portfolio from '../../components/home/Portfolio';
import FooterComponent from '../../components/footer/FooterComponent';

function HomePage() {
  return (
    <div className='min-h-screen w-full overflow-hidden bg-main-bg'>
      <div className='grid w-full h-full overflow-y-scroll scrollbar-hidden'>
        {/* Header container */}
        <div id='/' className='grid grid-rows-reg mb-16'>
          {/* Navigation */}
          <Navbar />
          {/* Header */}
          <Header />
        </div>

        {/* Main content */}
        <main className='grid w-full h-full'>
          {/* First section of main */}
          <InformationComponent />

          {/* Second section of main */}
          <Portfolio />

          {/* Colour block */}
          <div className='w-full h-16 bg-slate-50 overflow-hidden'></div>

          {/* Third section of main */}
          <ServicesComponent />
          <ReviewsComponent />
        </main>

        {/* Footer */}
        <FooterComponent />
      </div>
    </div>
  );
}

export default HomePage;
