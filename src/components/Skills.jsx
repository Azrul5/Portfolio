import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiVite,
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiVercel,
  SiXampp,
} from "react-icons/si";

const skills = [
  {
    category: "FRONTEND",
    technologies: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "#7952B3",
      },
    ],
  },

  {
    category: "BACKEND",
    technologies: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#222222",
      },
      {
        name: "PHP",
        icon: FaPhp,
        color: "#777BB4",
      },
    ],
  },

  {
    category: "DATABASE",
    technologies: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
    ],
  },

  {
    category: "TOOLS & DEPLOYMENT",
    technologies: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
      },
      {
        name: "VS Code",
        icon: FaCode,
        color: "#007ACC",
      },
      {
        name: "XAMPP",
        icon: SiXampp,
        color: "#FB7A24",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "#000000",
      },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">

      <div className="section-container">

        <div className="section-heading">

          <span className="section-number">
            03
          </span>

          <div>
            <p className="section-label">
              TECHNICAL SKILLS
            </p>

            <h2>
              Technologies I work with.
            </h2>
          </div>

        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div
              className="skill-card"
              key={skill.category}
            >

              <p className="skill-category">
                {skill.category}
              </p>

              <div className="skill-list">

                {skill.technologies.map((technology) => {

                  const Icon = technology.icon;

                  return (
                    <div
                      className="skill-item"
                      key={technology.name}
                    >

                      <Icon
                        className="skill-icon"
                        style={{
                          color: technology.color,
                        }}
                      />

                      <span>
                        {technology.name}
                      </span>

                    </div>
                  );

                })}

              </div>

            </div>
          ))}

        </div>

        <div className="skills-note">

          <span>+</span>

          <p>
            Currently focused on improving my React,
            JavaScript, Node.js, database, and full-stack
            development skills.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Skills;