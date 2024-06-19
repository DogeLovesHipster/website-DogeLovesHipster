import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  PreLoader,
  Footer,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  NotFoundPage,
} from "./components";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this._isMounted = true;
  
    Promise.all([
      new Promise((resolve) => window.addEventListener('load', resolve)),
      document.fonts.ready,
      
    ]).then(() => {
      if (this._isMounted) {
        this.setState({ isLoading: false });
      }
    });
  }
  
  componentWillUnmount() {
    this._isMounted = false;
  }


  render() {
    const contentClass = this.state.isLoading ? "" : "fade-in";
    return (
      <BrowserRouter>
        {this.state.isLoading ? (
          <PreLoader />
        ) : (
          <Routes>
            <Route path="/" element={
              <div className={`relative z-0 bg-primary ${contentClass}`}>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <Hero />
                </div>
                <About />
                <Experience />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                  <Contact />
                  <Footer />
                  <StarsCanvas />
                </div>
              </div>
            } />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </BrowserRouter>
    );
  }
}

export default App;