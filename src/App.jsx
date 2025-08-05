import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className='logo'>Portfolio</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}></div>
        <a href="#about">About</a>
        <a href="#qualification">Qualification</a>
        <a href="#internship">Internship</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <header>
        <h1>Krishnakanta Biswal</h1>
        <p>Frontend Developer | React Enthusiast</p>
      </header>

      <section id="about" className="about" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer with experience in building responsive websites and React applications. I enjoy turning ideas into reality through clean code and beautiful UI.
        </p>
      </section>

      <section id="qualification" className="qualification" data-aos="fade-up">
        <h2>Qualification</h2>
        <p><strong>Degree:</strong> Bachelor of Computer Applications (BCA)</p>
        <p><strong>University:</strong> Fakir Mohan University, Balasore</p>
        <p><strong>College:</strong> Academy of Business Administration, Balasore</p>
        <p><strong>CGPA:</strong> 7.91 | <strong>Core CGPA:</strong> 8.11</p>
        <p><strong>Aggregate:</strong> 73.15% | <strong>Core %:</strong> 74.50%</p>
        <p><strong>Result:</strong> First Class Honours with Distinction</p>
        <img src="/degree.jpg" alt="Degree Certificate" className="certificate-img" />
      </section>

      <section id="internship" className="internship" data-aos="fade-up">
        <h2>Internship</h2>
        <p><strong>Organization:</strong> Prodigy InfoTech</p>
        <p><strong>Duration:</strong> 1st July 2025 – 31st July 2025</p>
        <p><strong>Role:</strong> Web Development Intern</p>
        <p><strong>Remarks:</strong> Completed with outstanding performance</p>
        <img src="/internship.jpg" alt="Internship Certificate" className="certificate-img" />
      </section>

      <section id="projects" className="projects" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Instagram Clone</h3>
            <p>A basic Instagram UI clone using HTML, CSS, and JS.</p>
            <a href="https://krishnakanta-biswal.github.io/Instagram-clone/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>

          <div className="project-card">
            <h3>Recurring Date Picker</h3>
            <p>A date picker that allows selecting recurring dates.</p>
            <a href="https://krishnakanta-biswal.github.io/recurring-date-picker/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>

          <div className="project-card">
            <h3>Stopwatch</h3>
            <p>A stopwatch with start/pause/reset.</p>
            <a href="https://krishnakanta-biswal.github.io/PRODIGY_WD_02/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>

          <div className="project-card">
            <h3>Tic Tac Toe</h3>
            <p>Two-player Tic Tac Toe game.</p>
            <a href="https://krishnakanta-biswal.github.io/PRODIGY_WD_03/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </section>

      <section id="skills" className="skills" data-aos="fade-up">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section id="contact" className="contact" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Mobile No: +91 7894269292</p>
        <p>Email: krishnakanta@example.com</p>
        <p>GitHub: <a href="https://github.com/krishnakanta-biswal" target="_blank" rel="noreferrer">View Profile</a></p>
      </section>

      <footer>
        <p>© 2025 Krishnakanta Biswal</p>
      </footer>
    </div>
  );
}

export default App;
