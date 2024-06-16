import React, { useRef } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import PortfolioPageHeader from '../../components/portfolio/PortfolioPageHeader';
import PortfolioDisplay from '../../components/portfolio/PortfolioDisplay';
import ExperienceComponent from '../../components/portfolio/ExperienceComponent';
import ServicesComponent from '../../components/portfolio/ServicesComponent';
import FooterComponent from '../../components/footer/FooterComponent';
import PortfolioComponent from '../../components/home/PortfolioComponent';
import CircuitDisplayComponent from '../../components/portfolio/CircuitDisplayComponent';
import BackToTopButton from '../../components/global/BackToTopButton';

function ProjectsPage() {
  const portfolioDisplayRef = useRef();

  return (
    <div className='h-full w-full overflow-hidden bg-main-bg'>
      <div className='grid grid-rows-reg min-h-screen'>
        <Navbar />
        <PortfolioPageHeader portfolioDisplayRef={portfolioDisplayRef} />
      </div>
      <main>
        <PortfolioDisplay portfolioDisplayRef={portfolioDisplayRef} />
        <PortfolioComponent />
        <div className='mb-10 mt-10 lg:mt-52'>
          <CircuitDisplayComponent />
        </div>
        <div className='my-6 lg:my-16'>
          <ExperienceComponent />
        </div>
        <ServicesComponent />
      </main>
      
      <div>
        <BackToTopButton />
      </div>

      <FooterComponent />
    </div>
  );
}

export default ProjectsPage;
