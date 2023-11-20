import { BrowserRouter } from "react-router-dom";

import { About, PreLoader, Footer, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useEffect, useState } from "react";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  } , []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <PreLoader />
      ) : (
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <Footer />
          <StarsCanvas />
        </div>
      </div>
      )}
    </BrowserRouter>
  );
};

export default App;
