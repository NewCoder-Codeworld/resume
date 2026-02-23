import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="main">

      {/* HERO SECTION */}
      <section className="hero section">
        <div className="hero-left">
          <p className="greeting">Hello, I'm</p>
          <h1>
            <span>Kalyani Deshpande</span>
          </h1>

          <p>
            UI/UX Designer & Frontend Developer specializing in creating modern, 
            user-friendly digital experiences using Figma and React.
          </p>

          <div className="btn-group">
            <a href="#projects" style={{ textDecoration: 'none' }}>
              <button className="primary">View Portfolio</button>
            </a>
            <a href="/resume.pdf" download style={{ textDecoration: 'none' }}>
              <button className="outline">Download Resume</button>
            </a>
          </div>
        </div>

        <div className="hero-card">
          <h3>Quick Info</h3>
          <p><span>📧</span> deshpandekd83@gmail.com</p>
          <p><span>📞</span> +91 9022801156</p>
          {/* <p><span>💻</span> github.com/yourprofile</p> */}
          {/* <p><span>🔗</span> linkedin.com/in/yourprofile</p> */}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section white">
        <h2>About Me</h2>
        <p className="center-text">
          I am a passionate UI/UX Designer and Frontend Developer with 2+ years
          of experience building responsive web applications. I combine strong
          design thinking with scalable frontend development to create 
          impactful digital products that users love.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>

        <div className="grid">
          <div className="card">
            <h3>Design</h3>
            <ul>
              <li>Figma</li>
              <li>Design Systems</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
            </ul>
          </div>

          <div className="card">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <ul>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section white" id="projects">
        <h2>Projects</h2>

        {/* ===== HTML CSS BOOTSTRAP ===== */}
        <h3 className="project-category">HTML / CSS / Bootstrap</h3>
        <div className="grid">

          <div className="card">
            <h3>Divyasparsh</h3>
            <p>Responsive HTML/CSS/Bootstrap UI for a Vastu & space harmonization website with modern layout and engaging design</p>
            <a 
              href="http://divyasparsh.com/index.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="outline small">View Project</button>
            </a>
          </div>

          <div className="card">
            <h3>Shubhankar Buildsol LLP</h3>
            <p>Responsive real estate UI built using HTML, CSS and Bootstrap with modern layout and animations.</p>
            <a 
              href="https://marketedge.co.in/shubhankar-buildsol-llp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="outline small">View Project</button>
            </a>
          </div>

          <div className="card">
            <h3>Community Website</h3>
            <p>Community website with forms, gallery, and information sections.</p>
            <a 
              href="https://brahmanunity.in/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="outline small">View Project</button>
            </a>
          </div>

          <div className="card">
            <h3>Shah & Kirtane</h3>
            <p>Multi-page finance website with services, contact form and responsive design.</p>
            <a 
              href="https://shahandkirtane.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="outline small">View Project</button>
            </a>
          </div>

        </div>


        {/* ===== REACT PROJECTS ===== */}
        <h3 className="project-category">React Projects</h3>
        <div className="grid">

          <div className="card">
            <h3>Viyaan Technosoft</h3>
            <p>Modern IT firm website built in React with reusable components and responsive design.</p>
            <a 
              href="https://viyaantechnosoft.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="outline small">View Project</button>
            </a>
          </div>

          <div className="card">
            <h3>The Challenge of Everest</h3>
            <p>Board game website with all information about the Everest.</p>
            <a 
              href="https://thechallengeofeverest.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="outline small">View Project</button>
            </a>
          </div>

        </div>


        {/* ===== FIGMA PROJECTS ===== */}
        <h3 className="project-category">UI / UX (Figma)</h3>
        <div className="grid">

          <div className="card">
            <h3>Procurement Management System</h3>
            <p>Complete UI design including design system and prototype.</p>
            <a 
              href="https://www.figma.com/design/ckHj9Gpfh7wHBc4gavgkGn/PROCUREMENT-MANAGEMENT-SYSTEM--Community---Community-?node-id=0-1&p=f&t=Tp9nVLqr8yiSaoLs-0" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="outline small">View Design</button>
            </a>
          </div>

          <div className="card">
            <h3>Website Designs Collection</h3>
            <p>Complete UI design including design system and prototype.</p>
            <a 
              href="https://www.figma.com/design/AEV9aShIrxYPfpbqyO3N99/Untitled?node-id=0-1&p=f&t=GKasU6M4Er9KYsFv-0" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="outline small">View Design</button>
            </a>
          </div>

          <div className="card">
            <h3>Management System UI</h3>
            <p>Admin dashboard UI with analytics charts and data visualization layout.</p>
            <a 
              href="https://www.figma.com/design/V8kSE5hFjh2JtkfH0IbULT/management-system?node-id=0-1&p=f&t=Owj3UQ8Ad0hOnu1F-0" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="outline small">View Design</button>
            </a>
          </div>

          <div className="card">
            <h3>E-Commerce Website UI</h3>
            <p>Modern shopping UI with product flow, cart UX and checkout experience.</p>
            <a 
              href="https://www.figma.com/design/l7n23L4CxS06bBSBSxLS0c/E-Commerce-App-Design--Community-?t=Owj3UQ8Ad0hOnu1F-0" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="outline small">View Design</button>
            </a>
          </div>

        </div>

      </section>


      {/* EXPERIENCE */}
      <section className="section">
        <h2>Experience</h2>

        <div className="card experience-card">
          <h3>Frontend Developer</h3>
          <p className="muted">Viyaan Technosoft LLP</p>
          <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
            Worked on static and dynamic web applications. Built responsive UI, 
            implemented React components, and collaborated with design teams 
            to deliver high-quality digital products.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section white center">
        <h2>Get In Touch</h2>
        <p className="center-text">
          Open to UI/UX and Web Designer, Frontend opportunities. 
          Let's create something amazing together!
        </p>

        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <a href="mailto:deshpandekd83@gmail.com" style={{ textDecoration: 'none' }}>
            <button className="primary">Email Me</button>
          </a>
          <a href="/resume.pdf" download style={{ textDecoration: 'none' }}>
            <button className="outline">Download Resume</button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Kalyani Deshpande. Crafted with passion.
      </footer>

    </div>
  );
}
