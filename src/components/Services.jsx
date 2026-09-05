import "./Services.css";

const services = [
  {
    number: "01",
    title: "Responsive Web Development",
    description:
      "Build responsive and user-friendly websites that adapt smoothly across desktop, laptop, tablet, and mobile devices.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },

  {
    number: "02",
    title: "Web Application Development",
    description:
      "Develop functional web applications using modern frontend and backend technologies such as React, JavaScript, PHP, Node.js, and Express.",
    tags: ["React", "Node.js", "Express", "PHP"],
  },

  {
    number: "03",
    title: "Database Integration",
    description:
      "Connect web applications with databases to store, retrieve, organize, and manage application data.",
    tags: ["MySQL", "SQL", "API", "Backend"],
  },

  {
    number: "04",
    title: "Debugging & Problem Solving",
    description:
      "Analyze technical problems, debug applications, improve functionality, and continuously learn better development practices.",
    tags: ["Debugging", "Git", "APIs", "Problem Solving"],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="section services-section"
    >

      {/* =====================================
          ANIMATED BACKGROUND
      ====================================== */}

      <div className="services-background">

        <div className="services-grid-bg"></div>

        <div className="services-glow services-glow-one"></div>
        <div className="services-glow services-glow-two"></div>

        <div className="services-scan-line"></div>

        <div className="services-particles"></div>

        <div className="services-noise"></div>

      </div>


      <div className="section-container">

        {/* =====================================
            SECTION HEADING
        ====================================== */}

        <div className="section-heading services-heading">

          <span className="section-number"></span>

          <div>

            <p className="section-label">
              WHAT I CAN DO
            </p>

            <h2>
              Practical skills I can bring
              to a development team.
            </h2>

          </div>

        </div>


        {/* =====================================
            INTRODUCTION
        ====================================== */}

        <div className="services-intro">

          <p>
            I focus on building practical web solutions
            that are responsive, functional, and easy to use.
            My experience comes from academic projects,
            personal projects, and hands-on development.
          </p>

        </div>


        {/* =====================================
            SERVICES
        ====================================== */}

        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.number}
            >

              <div className="service-top">

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>

              </div>


              <div className="service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>


              <div className="service-tags">

                {service.tags.map((tag) => (

                  <span
                    key={tag}
                    className="service-tag"
                  >
                    {tag}
                  </span>

                ))}

              </div>


              <div className="service-line"></div>

            </article>

          ))}

        </div>


        {/* =====================================
            FOOTER STATEMENT
        ====================================== */}

        <div className="services-footer">

          <span className="services-footer-line"></span>

          <p>
            Always learning. Always improving.
          </p>

          <span className="services-footer-line"></span>

        </div>

      </div>

    </section>
  );
}

export default Services;