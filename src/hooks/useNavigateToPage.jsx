import { useNavigate } from 'react-router-dom';

const useNavigateToPage = () => {
  const navigate = useNavigate();

  const navigateToPage = (page) => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      navigate(page, { replace: true });
    }, 300);
  };

  return navigateToPage;
};

export default useNavigateToPage;
