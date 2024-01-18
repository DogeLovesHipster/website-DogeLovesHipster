import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import '../styles/shine-animation.css';

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.onload = () => setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shine">
        <img src={logo} alt="Logo" 
        className="w-28 h-28 object contain" 
        style={{ objectPosition: 'center top' }}/>
      </div>
    </div>
  );
};

export default PreLoader;