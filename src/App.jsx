import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
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
    this._isMounted = true; // Set flag to true when component mounts
  
    Promise.all([
      new Promise((resolve) => window.addEventListener('load', resolve)),
      document.fonts.ready,
      
    ]).then(() => {
      if (this._isMounted) { // Check if component is still mounted
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
        )}
      </BrowserRouter>
    );
  }
}

export default App;