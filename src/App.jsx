import "./App.css";

function App() {
  const skills = [
    "C#",
    "Java",
    "Python",
    "JavaScript",
    "React.js",
    "Node.js",
    "ASP.NET Core",
    "Django",
    "REST APIs",
    "SQL",
    "Microsoft SQL Server",
    "MySQL",
    "AWS",
    "Git",
    "GitHub",
    "Swagger",
    "Postman",
  ];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            N<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#coding-profiles">Profiles</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-background"></div>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            <span className="initial">N</span>{" "}
            <span className="name">GANESH</span>
          </h1>

          <h2>
            Software Developer
          </h2>

          <p className="hero-description">
            Computer Science and Engineering graduate with hands-on
            experience in software development, full-stack web
            development, REST APIs, databases, testing and debugging.
            Passionate about building reliable and user-focused
            applications.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Projects
            </a>

            <a
              href="/Ganesh__N_Resume.pdf"
              className="btn btn-outline"
              download="Ganesh_N_Resume.pdf"
            >
              Download Resume
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://linkedin.com/in/ganesh-n-9a8561285/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <span>•</span>

            <a
              href="https://github.com/Ganesh4064"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a href="mailto:ganeshngan056@gmail.com">
              Email
            </a>

          </div>

        </div>


        {/* ================= CODE WINDOW ================= */}

        <div className="hero-code">

          <div className="code-card">

            <div className="code-header">

              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green-dot"></span>

            </div>

            <div className="code-content">

              <p>
                <span className="purple">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="indent">
                name:{" "}
                <span className="green">
                  "N Ganesh"
                </span>,
              </p>

              <p className="indent">
                role:{" "}
                <span className="green">
                  "Software Developer"
                </span>,
              </p>

              <p className="indent">
                languages:{" "}
                <span className="green">
                  "Java / C# / Python"
                </span>,
              </p>

              <p className="indent">
                frontend:{" "}
                <span className="green">
                  "React.js"
                </span>,
              </p>

              <p className="indent">
                backend:{" "}
                <span className="green">
                  "ASP.NET / Node.js"
                </span>,
              </p>

              <p className="indent">
                database:{" "}
                <span className="green">
                  "SQL"
                </span>,
              </p>

              <p className="indent">
                cloud:{" "}
                <span className="green">
                  "AWS"
                </span>,
              </p>

              <p className="indent">
                available:{" "}
                <span className="orange">
                  true
                </span>
              </p>

              <p>
                {"}"};
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section"
      >

        <div className="section-heading">

          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Building software with purpose.
          </h2>

        </div>

        <div className="about-grid">

          <div className="about-main">

            <p>
              I am a Computer Science and Engineering graduate with
              hands-on experience in software development, full-stack
              web development, REST APIs, databases, testing and
              debugging.
            </p>

            <p>
              During my internships, I worked with React.js,
              JavaScript, Node.js, REST APIs, databases, Git and
              GitHub while contributing to application development,
              testing and troubleshooting.
            </p>

            <p>
              I have also worked with C#, ASP.NET Core, SQL Server,
              JWT authentication and API development. I enjoy solving
              programming problems, learning new technologies and
              developing practical software solutions.
            </p>

            <p>
              I am currently looking for fresher and entry-level
              opportunities in software development, full-stack
              development and related IT roles.
            </p>

          </div>


          <div className="about-stats">

            <div className="stat">
              <strong>2</strong>
              <span>Internships</span>
            </div>

            <div className="stat">
              <strong>2</strong>
              <span>Projects</span>
            </div>

            <div className="stat">
              <strong>7.97</strong>
              <span>CGPA / 10</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-heading">

          <p className="section-label">
            TECHNICAL SKILLS
          </p>

          <h2>
            Technologies & tools.
          </h2>

        </div>


        <div className="skills-container">

          {skills.map((skill, index) => (

            <div
              className="skill-tag"
              key={index}
            >
              {skill}
            </div>

          ))}

        </div>


        <div className="skill-categories">

          <div className="skill-category">

            <span className="category-number">
              01
            </span>

            <h3>
              Programming
            </h3>

            <p>
              C#, Java, Python, JavaScript and SQL
            </p>

          </div>


          <div className="skill-category">

            <span className="category-number">
              02
            </span>

            <h3>
              Web Development
            </h3>

            <p>
              React.js, Node.js, ASP.NET Core, Django and REST APIs
            </p>

          </div>


          <div className="skill-category">

            <span className="category-number">
              03
            </span>

            <h3>
              Database
            </h3>

            <p>
              Microsoft SQL Server, MySQL, RDBMS and CRUD operations
            </p>

          </div>


          <div className="skill-category">

            <span className="category-number">
              04
            </span>

            <h3>
              Cloud & Tools
            </h3>

            <p>
              AWS, Git, GitHub, Swagger, Postman, testing and debugging
            </p>

          </div>

        </div>

      </section>


     {/* ================= CODING PROFILES ================= */}

     <section
       id="coding-profiles"
       className="section coding-profiles-section"
     >

       <div className="section-heading">

         <p className="section-label">
           CODING PROFILES
         </p>

         <h2>
           Code. Practice. Improve.
         </h2>

       </div>


       <div className="coding-profiles-grid">


         {/* GitHub */}

         <a
           href="https://github.com/Ganesh4064"
           target="_blank"
           rel="noreferrer"
           className="coding-profile-card"
         >

           <div className="profile-number">
             01
           </div>

           <div className="profile-icon">
             <img
               src="https://cdn.simpleicons.org/github/ffffff"
               alt="GitHub"
             />
           </div>

           <div className="profile-content">

             <h3>
               GitHub
             </h3>

             <p>
               Projects, source code and development work.
             </p>

             <span>
               View Profile →
             </span>

           </div>

         </a>


         {/* LeetCode */}

         <a
           href="https://leetcode.com/u/Ganesh_lucky/"
           target="_blank"
           rel="noreferrer"
           className="coding-profile-card"
         >

           <div className="profile-number">
             02
           </div>

           <div className="profile-icon">
             <img
               src="https://cdn.simpleicons.org/leetcode/ffffff"
               alt="LeetCode"
             />
           </div>

           <div className="profile-content">

             <h3>
               LeetCode
             </h3>

             <p>
               Data structures, algorithms and problem solving.
             </p>

             <span>
               View Profile →
             </span>

           </div>

         </a>


         {/* GeeksforGeeks */}

         <a
           href="https://www.geeksforgeeks.org/profile/ganesh_n125"
           target="_blank"
           rel="noreferrer"
           className="coding-profile-card"
         >

           <div className="profile-number">
             03
           </div>

           <div className="profile-icon">
             <img
               src="https://cdn.simpleicons.org/geeksforgeeks/ffffff"
               alt="GeeksforGeeks"
             />
           </div>

           <div className="profile-content">

             <h3>
               GeeksforGeeks
             </h3>

             <p>
               Programming practice, DSA and technical learning.
             </p>

             <span>
               View Profile →
             </span>

           </div>

         </a>


         {/* HackerRank */}

         <a
           href="https://www.hackerrank.com/profile/nganeshlucky125"
           target="_blank"
           rel="noreferrer"
           className="coding-profile-card"
         >

           <div className="profile-number">
             04
           </div>

           <div className="profile-icon">
             <img
               src="https://cdn.simpleicons.org/hackerrank/ffffff"
               alt="HackerRank"
             />
           </div>

           <div className="profile-content">

             <h3>
               HackerRank
             </h3>

             <p>
               Programming, SQL and technical problem solving.
             </p>

             <span>
               View Profile →
             </span>

           </div>

         </a>

       </div>

     </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section"
      >

        <div className="section-heading">

          <p className="section-label">
            EXPERIENCE
          </p>

          <h2>
            Internship Experience
          </h2>

        </div>


        <div className="timeline">


          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <div className="experience-top">

                <div className="job-title">

                  <h3>
                    Frontend Developer Intern
                  </h3>

                  <span className="company-name">
                    CEERAS
                  </span>

                </div>

                <span className="date">
                  Feb 2025 – Jul 2025
                </span>

              </div>

              <p className="location">
                Andhra Pradesh
              </p>

              <ul>

                <li>
                  Developed and maintained application features using
                  HTML, CSS, JavaScript and React.js.
                </li>

                <li>
                  Performed testing, debugging, troubleshooting and
                  validation to identify and resolve application issues.
                </li>

                <li>
                  Collaborated with team members to understand
                  requirements and complete assigned development tasks.
                </li>

                <li>
                  Used Git and GitHub for version control and
                  participated in team development activities.
                </li>

              </ul>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <div className="experience-top">

                <div className="job-title">

                  <h3>
                    Full Stack Web Developer Intern
                  </h3>

                  <span className="company-name">
                    Vrishanksoft (OPC) Pvt. Ltd.
                  </span>

                </div>

                <span className="date">
                  Aug 2025 – Dec 2025
                </span>

              </div>

              <p className="location">
                Belagavi, Karnataka
              </p>

              <ul>

                <li>
                  Developed web application features using JavaScript,
                  Node.js, REST APIs and databases.
                </li>

                <li>
                  Performed testing, debugging, troubleshooting and
                  validation to improve application functionality.
                </li>

                <li>
                  Worked with databases and implemented CRUD operations
                  for application data.
                </li>

                <li>
                  Collaborated with team members to resolve application
                  issues and complete assigned tasks.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-heading">

          <p className="section-label">
            PROJECTS
          </p>

          <h2>
            Things I've built.
          </h2>

        </div>


        <div className="projects-grid">


          <article className="project-card featured">

            <div className="project-top">

              <span className="project-number">
                01
              </span>

              <span className="project-date">
                Aug 2026
              </span>

            </div>

            <div className="project-icon">
              API
            </div>

            <h3>
              CRN Product API
            </h3>

            <p>
              A secure REST API developed for product management using
              ASP.NET Core, C# and SQL Server, with authentication,
              authorization and validation features.
            </p>

            <div className="project-features">

              <div>✓ CRUD operations</div>
              <div>✓ JWT authentication</div>
              <div>✓ Authorization</div>
              <div>✓ Refresh tokens</div>
              <div>✓ Input validation</div>
              <div>✓ Error handling</div>
              <div>✓ Swagger API testing</div>

            </div>

            <div className="project-tech">

              <span>C#</span>
              <span>ASP.NET Core</span>
              <span>SQL Server</span>
              <span>JWT</span>
              <span>REST API</span>

            </div>

            <a
              href="https://github.com/Ganesh4064"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>

          </article>


          <article className="project-card">

            <div className="project-top">

              <span className="project-number">
                02
              </span>

              <span className="project-date">
                Jan 2025 – Apr 2025
              </span>

            </div>

            <div className="project-icon">
              WEB
            </div>

            <h3>
              Doctor Appointment System
            </h3>

            <p>
              A web application for managing patient, doctor and
              appointment information with REST API integration,
              CRUD operations and relational database support.
            </p>

            <div className="project-features">

              <div>✓ Patient management</div>
              <div>✓ Doctor management</div>
              <div>✓ Appointment management</div>
              <div>✓ REST APIs</div>
              <div>✓ CRUD operations</div>
              <div>✓ Relational database</div>

            </div>

            <div className="project-tech">

              <span>Python</span>
              <span>Django</span>
              <span>MySQL</span>
              <span>REST APIs</span>

            </div>

            <a
              href="https://github.com/Ganesh4064"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>

          </article>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="section"
      >

        <div className="section-heading">

          <p className="section-label">
            EDUCATION
          </p>

          <h2>
            Academic Background
          </h2>

        </div>


        <div className="education-grid">

          <div className="education-card">

            <div className="education-year">
              2022 – 2026
            </div>

            <h3>
              Bachelor of Engineering
            </h3>

            <p>
              Computer Science and Engineering
            </p>

            <strong>
              Akshaya Institute of Technology
            </strong>

            <div className="education-score">
              CGPA: 7.97 / 10
            </div>

            <span>
              Tumakuru, Karnataka
            </span>

          </div>


          <div className="education-card">

            <div className="education-year">
              2018 – 2020
            </div>

            <h3>
              Pre-University Course
            </h3>

            <p>
              Science – PCMB
            </p>

            <strong>
              Pupil Tree PU College
            </strong>

            <div className="education-score">
              Grade: 71.83%
            </div>

            <span>
              Bellary, Karnataka
            </span>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}

      <section className="section certifications-section">

        <div className="section-heading">

          <p className="section-label">
            CERTIFICATIONS
          </p>

          <h2>
            Continuous learning.
          </h2>

        </div>


        <div className="certifications-grid">

          <div className="certification-card">

            <span>01</span>

            <h3>
              Java Programming
            </h3>

            <p>
              Core Java, Object-Oriented Programming, Data Structures
              and problem solving.
            </p>

          </div>


          <div className="certification-card">

            <span>02</span>

            <h3>
              SQL & Database Management
            </h3>

            <p>
              SQL, MySQL, database concepts, queries and relational
              database fundamentals.
            </p>

          </div>


          <div className="certification-card">

            <span>03</span>

            <h3>
              Frontend Web Development
            </h3>

            <p>
              HTML, CSS and JavaScript fundamentals for modern
              web development.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <p className="section-label">
          GET IN TOUCH
        </p>

        <h2>
          Let's build something great together.
        </h2>

        <p className="contact-description">
          I am currently looking for fresher and entry-level
          opportunities in software development, full-stack development
          and related IT roles.
        </p>


        <div className="contact-buttons">

          <a
            href="mailto:ganeshngan056@gmail.com"
            className="btn btn-primary"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/ganesh-n-9a8561285/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Ganesh4064"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub
          </a>

        </div>


        <div className="contact-details">

          <div>
            <span>Email</span>
            <p>
              ganeshngan056@gmail.com
            </p>
          </div>

          <div>
            <span>Phone</span>
            <p>
              +91 9380979924
            </p>
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 N Ganesh
        </p>

        <p>
          Software Developer • Java • C# • React
        </p>

      </footer>

    </div>
  );
}

export default App;