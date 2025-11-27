import "./About.css"
import FadeInOnScroll from "./FadeInScroll"
export default function About() {
    const scrollToWork = () => {
        const aboutSection = document.querySelector('.carousel-container');
        aboutSection?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
        });
    };
    return (
        <div className="aboutWrapper">
            <img
                src={"/IMG_4082.jpg"}
                className="about-photo"
              />
        <h1 className="aboutTitle">About Me</h1>
<h2 className="aboutBody">
  Pursuing a degree in Management of Information Systems at the University of New Mexico’s Anderson School of Management, with a strong passion for web developement, software engineering, cloud solutions, and solving complex problems. I’m actively seeking opportunities in the tech industry where I can apply my skills, build meaningful products, and continue growing as a developer.
  <br /><br />
  Principal Software Engineer of SquareScan, an award-winning SaaS startup serving real estate and contracting companies. I work across the full stack, developing mobile applications and platform services that support our users and drive the product forward.
</h2>
       <FadeInOnScroll>
        <div className="projectBtn" onClick={scrollToWork}>My Work</div>
        <img 
        src={"./downarrow.svg"} 
        className={`arrowLogo`}
        onClick={scrollToWork}
        alt="Scroll down"
      />
        </FadeInOnScroll>
        </div>
    ) 
}