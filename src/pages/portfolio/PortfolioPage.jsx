import React, { useRef } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import About from '../../components/portfolio/About';
import Header from '../../components/portfolio/Header';
import PortfolioDisplay from '../../components/portfolio/PortfolioDisplay';
import Experience from '../../components/portfolio/Experience';
import ReviewsComponent from '../../components/reviews/ReviewsComponent';
import PortfolioCta from '../../components/portfolio/PortfolioCta';
import ServicesComponent from '../../components/portfolio/ServicesComponent';

function ProjectsPage() {
  const myRef = useRef(null);

  return (
    <div className='min-h-screen w-full overflow-hidden'>
      <Navbar />
      <Header />
      <About myRef={myRef} />
      <PortfolioDisplay />
      <Experience />
      <ServicesComponent />
      <ReviewsComponent />
      <PortfolioCta />
    </div>
  );
}

export default ProjectsPage;
