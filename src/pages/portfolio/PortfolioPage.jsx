import React, { useRef } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import About from '../../components/portfolio/About';
import Header from '../../components/portfolio/Header';
import PortfolioDisplay from '../../components/portfolio/PortfolioDisplay';
import Experience from '../../components/portfolio/Experience';
import ReviewsComponent from '../../components/reviews/ReviewsComponent';
import PortfolioCta from '../../components/portfolio/PortfolioCta';
import Services from '../../components/portfolio/Services';

function ProjectsPage() {
  const myRef = useRef(null);

  return (
    <div className='min-h-screen w-full overflow-hidden'>
      <Navbar />
      <Header />
      <About myRef={myRef} />
      <PortfolioDisplay myRef={myRef} />
      <Experience />
      <Services />
      <ReviewsComponent />
      <PortfolioCta />
    </div>
  );
}

export default ProjectsPage;
