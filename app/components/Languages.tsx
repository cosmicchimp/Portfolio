import "./Languages.css"
import FadeInOnScroll from "./FadeInScroll"
export default function Languages() {
      const scrollToWork = () => {
    const aboutSection = document.querySelector('.projectTitle');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
    return (
        <>        
        <h1 className="title">Languages & Skills Learned</h1>
       <div className="gridWrapper">
        <div className="row">
               <div className="imageBox">
             <img src="./javascriptlogo.webp" alt="JavaScript" />
             <p>JavaScript</p>
         </div>
        </div>
  <div className="row">
    <div className="imageBox">
      <img src="./typescriptlogo.png" alt="TypeScript" />
      <p>TypeScript</p>
    </div>
    <div className="imageBox">
      <img src="./pythonlogo.png" alt="Python" />
      <p>Python</p>
    </div>
     <div className="imageBox">
      <img src="./nodejslogo.png" alt="NodeJS" />
      <p>NodeJS</p>
    </div>
  </div>

  <div className="row">
    <div className="imageBox">
      <img src="./dockerlogo.png" alt="Docker" />
      <p>Docker</p>
    </div>
    <div className="imageBox">
      <img src="./awslogo.png" alt="AWS" />
      <p>AWS</p>
    </div>
    <div className="imageBox">
      <img src="./javalogo.png" alt="Java" />
      <p>Java</p>
    </div>
    <div className="imageBox">
      <img src="./springbootlogo.png" alt="Spring Boot" />
      <p>Spring Boot</p>
    </div>
     <div className="imageBox">
      <img src="./fastapilogo.webp" alt="FastAPI" />
      <p>FastAPI</p>
    </div>
  </div>

  <div className="row">
    <div className="imageBox">
      <img src="./reactlogo.png" alt="React" />
      <p>React</p>
    </div>
    <div className="imageBox">
      <img src="./reactnativelogo.png" alt="React Native" />
      <p>React Native</p>
    </div>
       <div className="imageBox">
      <img src="./gitlogo.png" alt="Spring Boot" />
      <p>Git</p>
    </div>
   
  </div>
  <div className="row">
      <div className="imageBox">
      <img src="./nextjslogo.png" alt="nextJS" />
      <p>NextJS</p>
    </div>
  </div>
</div>
  <FadeInOnScroll>
        <span style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div className="projectBtn" onClick={scrollToWork}>My Work</div>
            <img 
            src={"./downarrow.svg"} 
            className={`arrowLogo`}
            onClick={scrollToWork}
            alt="Scroll down"
            />
        </span>
    </FadeInOnScroll>
</>
    )
}