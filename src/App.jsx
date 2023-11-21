import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import { About, PreLoader, Footer, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useEffect, useState } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  
  render() {
  return (
    <BrowserRouter>
      {this.state.isLoading ? (
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
}
}

export default App;
