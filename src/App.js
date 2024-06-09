import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import Error404 from './pages/error/Error404';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';
import TestPage from './pages/test/TestPage';
import SalesPage from './pages/sales/SalesPage';
import PortfolioItemPage from './pages/portfolio/PortfolioItemPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/portfolio' index element={<PortfolioPage />} />
      {/* Portfolio Item */}
      <Route path='/portfolio-item/:itemId' element={<PortfolioItemPage />} />
      <Route path='/about' index element={<AboutPage />} />
      <Route path='/contact' index element={<ContactPage />} />
      <Route path='/sales' index element={<SalesPage />} />
      <Route path='/test' index element={<TestPage />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default App;
