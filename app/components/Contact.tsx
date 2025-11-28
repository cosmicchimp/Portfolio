import "./Contact.css";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("your_email@example.com");
    alert("Email copied to clipboard!");
  };

  return (
    <>
      <div className="titleBox">
        <h1 className="contactTitle">Connect With Me</h1>
        <div className="contactBar"></div>
      </div>

      <div className="contactWrapper">
        <button className="contactBtn" onClick={handleEmailClick}>
          <Mail size={22} />
            max.lambert429@gmail.com
        </button>

        <a
          className="contactBtn"
          href="https://github.com/cosmicchimp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={22} />
          GitHub
        </a>

        <a
          className="contactBtn"
          href="https://www.linkedin.com/in/max-dev-lambert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={22} />
          LinkedIn
        </a>
      </div>
    </>
  );
}
