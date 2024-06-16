import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import Error404 from './pages/error/Error404';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';
import SalesPage from './pages/sales/SalesPage';
import PortfolioItemPage from './pages/portfolio/PortfolioItemPage';
import ImageDisplayPage from './pages/Image/ImageDisplayPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/portfolio' element={<PortfolioPage />} />
      <Route path='/portfolio-item/:itemId' element={<PortfolioItemPage />} />
      <Route path="/image-display/:id" element={<ImageDisplayPage />} /> 
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/sales' element={<SalesPage />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default App;
