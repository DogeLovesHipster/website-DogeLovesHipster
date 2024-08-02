import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import '../styles/spin-animation.css';

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = logo;

    const handleLoad = () => {
      // Ensure both the image is loaded and window.load event has fired
      if (img.complete && document.readyState === 'complete') {
        setIsLoading(false);
      }
    };

    // Listen for window load event
    window.addEventListener('load', handleLoad);
    img.onload = handleLoad;

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('load', handleLoad);
  }, []); 

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spin">
          <img src={logo} alt="Logo" 
          className="w-28 h-28 object contain" 
          style={{ objectPosition: 'center top' }}/>
        </div>
      </div>
    );
  }

  // Return null or a different component when not loading
  return null;
};

export default PreLoader;