import "./About.css"
import FadeInOnScroll from "./FadeInScroll"
export default function About() {
    const scrollToWork = () => {
        const aboutSection = document.querySelector('.title');
        aboutSection?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
        });
    };

    return (
        
        <div className="aboutWrapper">
            <img
                src={"./personlogo.png"}
                className="about-photo"
              />
              <div className="titleBox">
                <h1 className="aboutTitle">About Me</h1>
                <div className="titleBar"></div>
              </div>
<h2 className="aboutBody">
Pursuing a degree in Management of Information Systems at the University of New Mexico’s Anderson School of Management, I’m passionate about software engineering, web development, cloud solutions, and solving complex problems. <br></br><br></br>As the Principal Software Engineer of SquareScan—an award-winning SaaS startup serving real estate and contracting companies—I work across the full stack building mobile applications and platform services that support our users and push the product forward, and I’m actively seeking opportunities to continue growing as a developer.
</h2>
    <FadeInOnScroll>
        <span style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div className="projectBtn" onClick={scrollToWork}>My Skills</div>
            <img 
            src={"./downarrow.svg"} 
            className={`arrowLogo`}
            onClick={scrollToWork}
            alt="Scroll down"
            />
        </span>
    </FadeInOnScroll>
    </div>
    ) 
}