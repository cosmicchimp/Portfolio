import "../styles/Languages.css"
import FadeInOnScroll from "./FadeInScroll"
export default function Languages() {
  const skills = [{title:"JavaScript", src:"./javascriptlogo.webp"},{title:"Bash", src:"./bashlogo.png"}, {title:"TypeScript", src:"./typescriptlogo.png"}, {title:"Python", src:"pythonlogo.png"}, {title:"NodeJS", src:"nodejslogo.png"}, {title:"Docker",src:"dockerlogo.png"}, {title:"AWS", src:"awslogo.png"}, {title:"Java", src:"javalogo.png"}, {title:"Spring Boot",src:"springbootlogo.png"}, {title:"PostgreSQL", src:"postgreslogo.png"}, {title:"React", src:"reactlogo.png"}, {title:"React Native", src:"reactnativelogo.png"}, {title:"Git", src:"gitlogo.png"}, {title:"Powershell", src:"powershelllogo.png"}, {title:"NextJS", src:"nextjslogo.png"}]
      const scrollToWork = () => {
    const aboutSection = document.querySelector('.projectTitle');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
    return (
        <>        
          <div className="langTitleBox">
            <h1 className="title">Skills</h1>
            <div className="langBar"></div>
          </div>

          <div className="gridWrapper">
            <div className="rowWrapper">
              {/* First row of icons */}
              <div className="row">
                {skills.map((skill, i) =>
                  i <= 1 ? (
                    <div className="imageBox" key={i}>
                      <img src={skill.src} alt={skill.title} />
                      <p>{skill.title}</p>
                    </div>
                  ) : null
                )}
              </div>

              {/* Second row of icons */}
              <div className="row">
                {skills.map((skill, i) =>
                  i >= 2 && i <= 4 ? (
                    <div className="imageBox" key={i}>
                      <img src={skill.src} alt={skill.title} />
                      <p>{skill.title}</p>
                    </div>
                  ) : null
                )}
              </div>

              {/* Third row of icons */}
              <div className="row">
                {skills.map((skill, i) =>
                    i >= 5 && i <= 9 ? (
                      <div className="imageBox" key={i}>
                        <img src={skill.src} alt={skill.title} />
                        <p>{skill.title}</p>
                      </div>
                    ) : null
                  )}
              </div>

              {/* Fourth of row icons */}
              <div className="row">
                  {skills.map((skill, i) =>
                    i >= 10 && i <= 12 ? (
                      <div className="imageBox" key={i}>
                        <img src={skill.src} alt={skill.title} />
                        <p>{skill.title}</p>
                      </div>
                    ) : null
                  )}
              </div>

              {/* Fifth row of icons */}
            <div className="row">
              {skills.map((skill, i) =>
                  i >= 13 ? (
                    <div className="imageBox" key={i}>
                      <img src={skill.src} alt={skill.title} />
                      <p>{skill.title}</p>
                    </div>
                  ) : null
                )}
            </div>
          </div>
          
          {/* This is the double column that will become visible once in a mobile view */}
          <div className='tripleColumn'>
              {/* First column */}
            <div className="columnOne">
              {skills.map((skill, i) =>
                i <= 4 ? (
                  <div className="imageBox" key={i}>
                    <img src={skill.src} alt={skill.title} />
                    <p>{skill.title}</p>
                  </div>
                  ) : null
                )}
            </div>

              {/* Second column */}
              <div className="columnTwo">
                {skills.map((skill, i) =>
                  i <= 9 && i > 4? (
                    <div className="imageBox" key={i}>
                      <img src={skill.src} alt={skill.title} />
                      <p>{skill.title}</p>
                    </div>
                  ) : null
                )}
              </div>

              {/* Third column */}
              <div className="columnThree">
                {skills.map((skill, i) =>
                  i <= 14 && i > 9 ? (
                    <div className="imageBox" key={i}>
                      <img src={skill.src} alt={skill.title} />
                      <p>{skill.title}</p>
                    </div>
                  ) : null
                )}
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