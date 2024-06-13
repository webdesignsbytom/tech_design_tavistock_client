import React, { useEffect, useState } from 'react';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="grid justify-center w-full">
        <button
          onClick={scrollToTop}
          className="bg-alt-colour border-2 border-solid border-alt-colour w-full text-white py-2 px-4  rounded-lg shadow-lg hover:bg-white hover:text-alt-colour transition duration-300"
          aria-label="Back to top"
        >
          Back to Top
        </button>
    </div>
  );
}

export default BackToTopButton;
