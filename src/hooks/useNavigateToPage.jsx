import { useNavigate } from 'react-router-dom';

const useNavigateToPage = () => {
  const navigate = useNavigate();

  const navigateToPage = (page) => {
    window.scrollTo(0, 0);
    navigate(page, { replace: true });
  };

  return navigateToPage;
};

export default useNavigateToPage;
