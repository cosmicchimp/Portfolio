  'use client';
  import Languages from './components/Languages';
  import { useState, useEffect } from 'react';
  import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
  import './page.css';
  import Header from "./components/Header";
  import Typewriter from './components/Typewriter';
  import About from './components/About';
  import StickyHeader from './components/StickyHeader';
  import FadeInOnScroll from './components/FadeInScroll';
  import Projects from './components/Projects';
  export default function PortfolioLanding() {
    return (
      <div className="landing-page">
        <Header />
        <About/>
        <Languages/> 
        <Projects/>
        <footer className="footer">
          <p>Get in touch: max.lambert429@gmail.com</p>
        </footer>
      </div>
    );
  }
