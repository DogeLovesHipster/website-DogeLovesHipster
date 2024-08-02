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

import Projects from "./components/Projects";
import DennysScraperBot from "./components/DennysScraperBot";
import DiscordWordleBot from "./components/DiscordWordleBot";
import ES386RFinal from "./components/ES386RFinal";
import WaterSoftHackDash from "./components/WaterSoftHackDash";

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
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/denny's-scalper-bot" element= {<DennysScraperBot />} />
            <Route path="/projects/discord-wordle-bot" element= {<DiscordWordleBot />} />
            <Route path="/projects/es386-r-final" element= {<ES386RFinal />} />
            <Route path="/projects/watersofthack-capstone-project-turbidity-dashboard/index.html" element= {<WaterSoftHackDash />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </BrowserRouter>
    );
  }
}

export default App;