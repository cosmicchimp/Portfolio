'use client';

import { useState, useEffect } from 'react';
import './Header.css';
import Typewriter from './Typewriter';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);       // header fade-in
    setTimeout(() => setBtnVisible(true), 1000);     // button + arrow fade-in
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.aboutWrapper');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`header ${isVisible ? 'header-visible' : ''}`}>
      <h1 className="header-title">Max Lambert</h1>
      <Typewriter
        speed={100}
        text="Full-Stack Engineer & Cloud Architect"
        className="typewriter"
        cursorChar="|"
      />

      <div
        className={`viewBtn ${isBtnVisible ? 'viewBtn-visible' : ''}`}
        onClick={scrollToAbout}
      >
        View My Work
      </div>

      <img
        src="./downarrow.svg"
        className={`arrowLogo ${isBtnVisible ? 'arrowLogo-visible' : ''}`}
        onClick={scrollToAbout}
        alt="Scroll down"
      />
    </header>
  );
}
