import { useLocation } from 'react-router-dom';

const ES386RFinal = () => {
  const location = useLocation();
  const { title } = location.state || { title: "Denny's Scalper Bot" }; // Fallback title if none is provided

  return (
    <div>
      <h1>{title}</h1>
      {/* Render other elements of your project detail page here */}
    </div>
);
};

export default ES386RFinal;