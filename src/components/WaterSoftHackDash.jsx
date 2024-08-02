import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WaterSoftHackDash = () => {
  const location = useLocation();
  const { title } = location.state || { title: "WaterSoftHack Dash" }; // Fallback title if none is provided

  useEffect(() => {
    window.location.href = "/projects/dashboard/index.html";
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {/* The rest of your content will not be displayed because of the redirection */}
    </div>
  );
};

export default WaterSoftHackDash;
