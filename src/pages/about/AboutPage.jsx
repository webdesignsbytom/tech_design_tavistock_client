import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import AboutSection from '../../components/about/AboutSection';
import WhyChooseUs from '../../components/about/WhyChooseUs';
import PurchaseOptions from '../../components/sales/PurchaseOptions'
import ReviewsComponent from '../../components/reviews/ReviewsComponent'
import FooterComponent from '../../components/footer/FooterComponent'

function AboutPage() {

  return (
    <div className='h-full w-full'>
      <Navbar />
      <main>
        <AboutSection />
        <WhyChooseUs />
        <PurchaseOptions />
        <ReviewsComponent />
      </main>
      <FooterComponent />
    </div>
  );
}

export default AboutPage;
