import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import PortfolioPageHeader from '../../components/portfolio/PortfolioPageHeader';
import PortfolioDisplay from '../../components/portfolio/PortfolioDisplay';
import ExperienceComponent from '../../components/portfolio/ExperienceComponent';
import ServicesComponent from '../../components/portfolio/ServicesComponent';
import FooterComponent from '../../components/footer/FooterComponent';
import PortfolioComponent from '../../components/home/PortfolioComponent'

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
        <ServicesComponent />
      </main>
      <FooterComponent />
    </div>
  );
}

export default ProjectsPage;
