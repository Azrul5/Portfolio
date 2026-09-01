const services = [
  {
    number: "01",
    title: "Responsive Websites",
    description:
      "Build responsive interfaces that work smoothly across desktop, laptop, tablet, and mobile devices.",
  },

  {
    number: "02",
    title: "Web Applications",
    description:
      "Develop functional web applications using JavaScript, React, PHP, Node.js, and Express.",
  },

  {
    number: "03",
    title: "Database Integration",
    description:
      "Connect applications with MySQL databases to store, retrieve, and manage application data.",
  },

  {
    number: "04",
    title: "Problem Solving",
    description:
      "Analyze problems, debug applications, and continuously learn better ways to build software.",
  },
];

function Services() {
  return (
    <section className="section services-section">

      <div className="section-container">

        <div className="section-heading">

          <span className="section-number">
            02
          </span>

          <div>

            <p className="section-label">
              WHAT I CAN DO
            </p>

            <h2>
              Practical skills I can bring to a team.
            </h2>

          </div>

        </div>

        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.number}
            >

              <span className="service-number">
                {service.number}
              </span>

              <div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;