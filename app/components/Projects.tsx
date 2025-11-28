  import { useState, useEffect } from 'react';
  import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
  import '../page.css';
export default function Projects() {
    interface Project {
    title: string;
    description: string;
    github: string;
    demo: string;
    image: string; // URL
  }
    const [currentSlide, setCurrentSlide] = useState(0);
        const projects: Project[] = [
          {
            title: "SquareScan",
            description: "A website built in NextJS, TS, NodeJS, and Express for my SaaS company SquareScan.",
            github: "https://github.com/cosmicchimp/squarescan_website_v3",
            demo: "https://squarescaninc.com/",
            image: "/IMG_9080.jpg"
          },
          {
            title: "BingeByte",
            description: "React-based mock storefront with items and a purchasing process.",
            github: "https://github.com/cosmicchimp/BingeByte",
            demo: "https://binge-byte.vercel.app/",
            image: "data:image/png;base64,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"
          },
          {
            title: "Members Only",
            description: "An proof of concept online message board featuring secure account creation and log ins. As well as admin permissions a variety of other auth concepts.",
            github: "https://github.com/cosmicchimp/Members_Only/tree/main",
            demo: "https://members-only-t456.onrender.com",
            image: "https://www.diagnosticsincontrol.com/wp-content/uploads/2023/11/Cyber-Security-Logo-PNG.png"
          },
          {
            title: "Portfolio Builder",
            description: "Personal resume builder that allows you to create and download a custome resume.",
            github: "https://github.com/cosmicchimp/cv-builder",
            demo: "https://cosmiccvbuilder.vercel.app/",
            image: "https://www.freeiconspng.com/uploads/resume-icon-png-9.png"
          }
        ];
            const nextSlide = () => {
              setCurrentSlide((prev) => (prev + 1) % projects.length);
            };
        
            const prevSlide = () => {
              setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
            };
        
            useEffect(() => {
              const timer = setInterval(nextSlide, 5000);
              return () => clearInterval(timer);
            }, []);
        
    return (
        <>
        <h1 className='projectTitle'>My Projects</h1>
        <div className="carousel-container">
          <div className="carousel-card">
            <div className="project-content">

              {/* PROJECT IMAGE */}
              <img
                src={projects[currentSlide].image}
                alt={projects[currentSlide].title}
                className="project-image"
              />

              {/* TEXT */}
              <h2 className="project-title">{projects[currentSlide].title}</h2>
              <p className="project-description">{projects[currentSlide].description}</p>

              {/* LINKS */}
              <div className="project-links">
                <a 
                  href={projects[currentSlide].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-github"
                >
                  <Github size={20} />
                  GitHub
                </a>

                <a 
                  href={projects[currentSlide].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-demo"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="carousel-nav">
              <button onClick={prevSlide} className="nav-btn">
                <ChevronLeft size={24} />
              </button>

              <div className="carousel-dots">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`dot ${currentSlide === index ? 'dot-active' : ''}`}
                  />
                ))}
              </div>

              <button onClick={nextSlide} className="nav-btn">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        </>
    )
}