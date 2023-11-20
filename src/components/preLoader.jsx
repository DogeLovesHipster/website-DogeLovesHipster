import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import '/home/sergio/website-DogeLovesHipster/src/shine-animation.css';

const PreLoader = () => {
  const [setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 5000); 
  }, []);

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
