const projects = [
  {
    number: "01",
    title: "Hotel Booking System",
    description:
      "A full-stack hotel booking web application designed to manage hotel reservations and provide users with a simple and responsive booking experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    image: "/screenshots/hotel-dashboard.png",
    github: "https://github.com/Azrul5/hotel-booking-system",
  },
  {
    number: "02",
    title: "Car Rental System",
    description:
      "A web-based car rental management system that allows users to explore available vehicles and manage rental-related information through a structured application.",
    technologies: ["JavaScript", "Node.js", "MySQL"],
    image: "/screenshots/car-rental-dashboard.png",
    github: "https://github.com/Azrul5/Car-Rental-System",
  },
  {
    number: "03",
    title: "Freelance Service Marketplace",
    description:
      "A marketplace website that connects clients with freelancers, allowing users to explore services and manage freelance-related transactions through a web application.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/screenshots/freelance-dashboard.png",
    github:
      "https://github.com/Azrul5/Freelance-service-marketplace-website",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">03</span>

          <div>
            <p className="section-label">SELECTED PROJECTS</p>
            <h2>Things I've built.</h2>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} dashboard`}
                  className="project-image"
                />

                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-view"
                  >
                    View on GitHub ↗
                  </a>
                </div>
              </div>

              <div className="project-content">
                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-details">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="technology-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <span>View Source Code</span>
                    <span>↗</span>
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