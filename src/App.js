import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import Error404 from './pages/error/Error404';
import ProjectsPage from './pages/projects/ProjectsPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/projects' index element={<ProjectsPage />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default App;
