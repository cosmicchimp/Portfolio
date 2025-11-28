import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import "../page.css";

interface Project {
  title: string;
  description: string;
  github: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "SquareScan",
    description:
      "A website built in NextJS, TS, NodeJS, and Express for my SaaS company SquareScan.",
    github: "https://github.com/cosmicchimp/squarescan_website_v3",
    demo: "https://squarescaninc.com/",
    image: "/IMG_9080.jpg",
  },
  {
    title: "BingeByte",
    description: "React-based mock storefront with items and a purchasing process.",
    github: "https://github.com/cosmicchimp/BingeByte",
    demo: "https://binge-byte.vercel.app/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Eo_circle_blue_letter-b.svg/2048px-Eo_circle_blue_letter-b.svg.png",
  },
  {
    title: "Members Only",
    description:
      "A proof-of-concept message board featuring secure account creation, user logins, admin permissions, and additional authentication features.",
    github: "https://github.com/cosmicchimp/Members_Only/tree/main",
    demo: "https://members-only-t456.onrender.com",
    image:
      "https://media.istockphoto.com/id/917734572/vector/abstract-security-vector-icon.jpg?s=612x612&w=0&k=20&c=N8yIi-rxvoF6x81imlMPZTuVFLlL1Ka1pBrepLVZTRs=",
  },
  {
    title: "Portfolio Builder",
    description:
      "A personal resume builder that allows you to create and download a custom resume.",
    github: "https://github.com/cosmicchimp/cv-builder",
    demo: "https://cosmiccvbuilder.vercel.app/",
    image: "https://www.freeiconspng.com/uploads/resume-icon-png-9.png",
  },
    {
    title: "PokéMatch",
    description:"A react based pokemon memory card card.",
    github: "https://github.com/cosmicchimp/PokeMatch",
    demo: "https://maxpokematch.vercel.app/",
    image: "./pokeball.png",
  },
    {
    title: "Mock Dashboard",
    description:
"A mock dashboard built entirely with HTML and CSS to showcase layout and styling skills.",
    github: "https://github.com/cosmicchimp/practice-dashboard",
    demo: "https://cosmicchimp.github.io/practice-dashboard/",
    image: "https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-dashboard-line-icon-vector-png-image_6626604.png",
  },
];

export default function Projects() {
  // ---- Carousel state ----
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [flip, setFlip] = useState<"" | "flip-up" | "flip-down">("");
  const FLIP_DURATION = 400;

  const flipToSlide = (newIndex: number) => {
    if (isAnimating || newIndex === currentSlide) return;
    setIsAnimating(true);
    setFlip("flip-up");

    setTimeout(() => {
      setCurrentSlide(newIndex);
      setFlip("flip-down");

      setTimeout(() => {
        setFlip("");
        setIsAnimating(false);
      }, FLIP_DURATION);
    }, FLIP_DURATION);
  };

  const nextSlide = () => flipToSlide((currentSlide + 1) % projects.length);
  const prevSlide = () =>
    flipToSlide((currentSlide - 1 + projects.length) % projects.length);
  const jumpTo = (i: number) => flipToSlide(i);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!isAnimating) nextSlide();
    }, 5000);
    return () => clearTimeout(t);
  }, [currentSlide, isAnimating]);

  const carouselProject = projects[currentSlide];

  // ---- Stacklist state ----
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleProject = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="titleBox">
        <h1 className="projectTitle">Projects</h1>
        <div className="projBar"></div>
      </div>

      {/* Flipping Carousel */}
      <div className="carousel-container">
        <div className="carousel-card">
          <div className={`project-content ${flip}`}>
            <img
              src={carouselProject.image}
              alt={carouselProject.title}
              className="project-image"
            />
            <h2 className="project-title">{carouselProject.title}</h2>
            <p className="project-description">
              {carouselProject.description}
            </p>

            <div className="project-links">
              <a
                href={carouselProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href={carouselProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-demo"
              >
                <ExternalLink size={20} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stacklist Accordion */}
      <div className="projectListWrapper">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`projectItem ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleProject(index)}
          >
            <div className="projectHeader">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h2 className="project-title">{project.title}</h2>
            </div>

            {openIndex === index && (
              <div className="projectDetails">
                <p className="projectDescription">{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-github"
                  >
                    <Github size={20} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-demo"
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
