import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import AboutSection from '../../components/about/AboutSection';
import WhyChooseUs from '../../components/about/WhyChooseUs';
import PurchaseOptions from '../../components/sales/PurchaseOptions';
import ReviewsComponent from '../../components/reviews/ReviewsComponent';
import FooterComponent from '../../components/footer/FooterComponent';
import ContactCta from '../../components/global/ContactCta';
import PortfolioCta from '../../components/global/PortfolioCta';
import BackToTopButton from '../../components/global/BackToTopButton';

function AboutPage() {
  return (
    <div className='h-full w-full'>
      <Navbar />
      <main>
        <AboutSection />
        <WhyChooseUs />
        <PurchaseOptions />
        <div className='mt-6 mb-24'>
          <ContactCta />
        </div>
        <div className='mt-6 mb-24'>
          <PortfolioCta />
        </div>
        <ReviewsComponent />
      </main>

      <div>
        <BackToTopButton />
      </div>
      <FooterComponent />
    </div>
  );
}

export default AboutPage;
