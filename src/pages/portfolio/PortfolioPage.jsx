import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import PortfolioPageHeader from '../../components/portfolio/PortfolioPageHeader';
import PortfolioDisplay from '../../components/portfolio/PortfolioDisplay';
import ExperienceComponent from '../../components/portfolio/ExperienceComponent';
import ReviewsComponent from '../../components/reviews/ReviewsComponent';
import PortfolioCta from '../../components/portfolio/PortfolioCta';
import ServicesComponent from '../../components/portfolio/ServicesComponent';
import FooterComponent from '../../components/footer/FooterComponent';
import PortfolioComponent from '../../components/home/PortfolioComponent'
import PurchaseOptions from '../../components/sales/PurchaseOptions';

function ProjectsPage() {

  return (
    <div className='h-full w-full overflow-hidden bg-main-bg'>
      <div className='grid grid-rows-reg min-h-screen'>
        <Navbar />
        <PortfolioPageHeader />
      </div>
      <main>
        <PortfolioDisplay />
        <PortfolioComponent />
        <ExperienceComponent />
        <PurchaseOptions />
        <ServicesComponent />
        <ReviewsComponent />
        <PortfolioCta />
      </main>
      <FooterComponent />
    </div>
  );
}

export default ProjectsPage;
