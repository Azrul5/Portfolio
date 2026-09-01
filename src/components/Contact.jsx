function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >

      <div className="contact-container">

        <div className="contact-heading">

          <p className="section-label">
            06 / GET IN TOUCH
          </p>

          <h2>
            Let's build
            <br />
            something.
          </h2>

          <p>
            I'm currently open to junior web development
            and entry-level IT opportunities. If you're
            looking for someone who is willing to learn,
            work hard, and contribute to a team, I'd be
            happy to connect.
          </p>

        </div>

        <div className="contact-actions">

          <a
            href="mailto:isnariazrul@gmail.com"
            className="contact-email"
          >
            <span>
              isnariazrul@gmail.com
            </span>

            <span>↗</span>
          </a>

          <div className="contact-details">

            <div>

              <span>
                LOCATION
              </span>

              <p>
                Zamboanga City, Philippines
              </p>

            </div>

            <div>

              <span>
                PHONE
              </span>

              <p>
                0997 668 8641
              </p>

            </div>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/Azrul5"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="mailto:isnariazrul@gmail.com"
            >
              Email ↗
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;