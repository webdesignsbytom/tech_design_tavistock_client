import React, { useRef } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import AboutSection from '../../components/about/AboutSection';
import WhyChooseUs from '../../components/about/WhyChooseUs';
import PurchaseOptions from '../../components/sales/PurchaseOptions'
import PriceTable from '../../components/sales/PriceTable'
import SalesCta from '../../components/sales/SalesCta'
import ReviewsComponent from '../../components/reviews/ReviewsComponent'

function AboutPage() {
  const myRef = useRef(null)

  return (
    <div className='h-full w-full'>
      <Navbar />
      <div>
        <AboutSection myRef={myRef} />
        <WhyChooseUs />
        <PurchaseOptions myRef={myRef} />
        <PriceTable />
        <SalesCta />
        <ReviewsComponent />
      </div>
    </div>
  );
}

export default AboutPage;