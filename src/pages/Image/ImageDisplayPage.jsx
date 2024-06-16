import React from 'react';
import { useLocation } from 'react-router-dom';

function ImageDisplayPage() {
    const location = useLocation();
    const { image } = location.state || { image: null };
  
    return (
      <div className="image-display-container">
        {image ? (
          <img src={image} alt="Displayed" loading='lazy' className="w-full h-full object-contain" />
        ) : (
          <p>No image to display</p>
        )}
      </div>
    );
}

export default ImageDisplayPage;
