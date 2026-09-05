import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Hotel Booking System",
    description:
      "A full-stack hotel booking web application designed to manage hotel reservations and provide users with a simple and responsive booking experience.",
    technologies: [
      {
        name: "HTML",
        icon: FaHtml5,
        className: "tech-html",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        className: "tech-css",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        className: "tech-javascript",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        className: "tech-node",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        className: "tech-mysql",
      },
    ],
    image: "/screenshots/hotel-dashboard.png",
    github: "https://github.com/Azrul5/hotel-booking-system",
  },

  {
    number: "02",
    title: "Car Rental System",
    description:
      "A web-based car rental management system that allows users to explore available vehicles and manage rental-related information through a structured application.",
    technologies: [
      {
        name: "JavaScript",
        icon: FaJs,
        className: "tech-javascript",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        className: "tech-node",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        className: "tech-mysql",
      },
    ],
    image: "/public/car-rental-dashboard.png",
    github: "https://github.com/Azrul5/Car-Rental-System",
  },

  {
    number: "03",
    title: "Freelance Service Marketplace",
    description:
      "A marketplace website that connects clients with freelancers, allowing users to explore services and manage freelance-related transactions through a web application.",
    technologies: [
      {
        name: "PHP",
        icon: FaPhp,
        className: "tech-php",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        className: "tech-mysql",
      },
      {
        name: "HTML",
        icon: FaHtml5,
        className: "tech-html",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        className: "tech-css",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        className: "tech-javascript",
      },
    ],
    image: "/freelance-dashboard.png",
    github:
      "https://github.com/Azrul5/Freelance-service-marketplace-website",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">

        {/* =================================
            SECTION HEADING
        ================================= */}
        <div className="projects-heading">

          {/* LEFT — SECTION TITLE */}
          <div className="projects-heading-left">

            <span className="section-number">
              
            </span>

            <div>
              <p className="section-label">
                SELECTED PROJECTS
              </p>

              <h2>
                Things I've built.
              </h2>
            </div>

          </div>


          {/* RIGHT — GITHUB */}
          <a
            href="https://github.com/Azrul5"
            target="_blank"
            rel="noopener noreferrer"
            className="all-projects-github"
            aria-label="View all projects on GitHub"
          >
            <FaGithub />

            <span>
              View all projects
            </span>

            <span className="all-projects-arrow">
              ↗
            </span>
          </a>

        </div>


        {/* =================================
            PROJECTS LIST
        ================================= */}
        <div className="projects-list">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              {/* =================================
                  PROJECT IMAGE
              ================================= */}
              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={`${project.title} dashboard`}
                  className="project-image"
                />

                <div className="project-image-overlay">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-button"
                  >
                    <FaGithub />

                    <span>
                      Explore on GitHub
                    </span>

                    <span className="github-arrow">
                      ↗
                    </span>
                  </a>

                </div>

              </div>


              {/* =================================
                  PROJECT CONTENT
              ================================= */}
              <div className="project-content">

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-details">

                  {/* TITLE */}
                  <div className="project-title-row">

                    <h3>
                      {project.title}
                    </h3>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-icon"
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      <FaGithub />

                      <span>
                        ↗
                      </span>
                    </a>

                  </div>


                  {/* DESCRIPTION */}
                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* TECHNOLOGIES */}
                  <div className="technology-list">

                    {project.technologies.map(
                      (technology) => {

                        const TechnologyIcon =
                          technology.icon;

                        return (
                          <span
                            className={`technology-item ${technology.className}`}
                            key={technology.name}
                          >
                            <TechnologyIcon />

                            <span>
                              {technology.name}
                            </span>
                          </span>
                        );
                      }
                    )}

                  </div>


                  {/* PROJECT GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-project-link"
                  >
                    <FaGithub />

                    <span>
                      Explore project on GitHub
                    </span>

                    <span className="github-link-arrow">
                      ↗
                    </span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;