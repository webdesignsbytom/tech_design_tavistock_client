import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import InformationComponent from '../../components/home/InformationComponent';
import ReviewsComponent from '../../components/reviews/ReviewsComponent';
import ServicesComponent from '../../components/portfolio/ServicesComponent';
import HeaderComponent from '../../components/home/HeaderComponent';
import PortfolioComponent from '../../components/home/PortfolioComponent';
import FooterComponent from '../../components/footer/FooterComponent';
import ContactCta from '../../components/global/ContactCta';
import PortfolioCta from '../../components/global/PortfolioCta';
import BackToTopButton from '../../components/global/BackToTopButton';

function HomePage() {
  return (
    <div className='min-h-screen w-full overflow-hidden bg-main-bg dark:bg-dark-main-bg'>
      <div className='grid w-full h-full overflow-y-scroll scrollbar-hidden'>
        {/* Header container */}
        <div id='/' className='grid grid-rows-reg mb-16 w-full'>
          {/* Navigation */}
          <Navbar />
          {/* Header */}
          <HeaderComponent />
        </div>

        {/* Main content */}
        <main className='grid w-full h-full'>
          {/* First section of main */}
          <InformationComponent />

          {/* Second section of main */}
          <PortfolioComponent />

          {/* Colour block */}
          <div className='w-full h-16 bg-main-bg dark:bg-dark-main-bg overflow-hidden'></div>

          {/* Third section of main */}
          <ServicesComponent />

          {/* Contact CTA */}
          <div className='my-4'>
            <ContactCta />
          </div>

          <div className='my-4'>
            <PortfolioCta />
          </div>
          {/* Colour block */}
          <div className='w-full h-16 bg-main-bg dark:bg-dark-main-bg overflow-hidden'></div>

          {/* Forth section of main */}
          <ReviewsComponent />
        </main>

        <div>
          <BackToTopButton />
        </div>
        {/* Footer */}
        <FooterComponent />
      </div>
    </div>
  );
}

export default HomePage;
