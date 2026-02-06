import "../styles/About.css"
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
                src={"./onstage.jpg"}
                className="about-photo"
              />
              <div className="titleBox">
                <h1 className="aboutTitle">About Me</h1>
                <div className="titleBar"></div>
              </div>
<h2 className="aboutBody">
I have a Bachelor’s degree in Management of Information Systems from the University of New Mexico, with a strong focus on software engineering, full-stack development, and cloud solutions.<br></br><br></br>
As a Principal Software Engineer at SquareScan, an award-winning SaaS platform serving real estate and contracting companies, I work across the full stack building and deploying end-to-end applications.<br></br><br></br>
I bring hands-on experience with Java, JavaScript, TypeScript, Python, and SQL, alongside AWS, Docker, distributed systems, auto-scaling architectures, and containerized deployments. My work as a programmer and entrepreneur has earned multiple university awards, and I’m now seeking opportunities to build impactful systems while continuing to grow as a developer.</h2>

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