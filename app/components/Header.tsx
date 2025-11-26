'use client';

import { useState, useEffect } from 'react';
import './Header.css';
import Typewriter from './Typewriter';
export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <header className={`header ${isVisible ? 'header-visible' : ''}`}>
      <h1 className="header-title">Max Lambert</h1>
              <Typewriter speed={100} text="Full-Stack Engineer & Cloud Architect  " className='typewriter' cursorChar={`|`}/>
    </header>
  );
}