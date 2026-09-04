import { useEffect, useRef, useState } from "react";

import "./About.css";

function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section about-section ${
        visible ? "about-visible" : ""
      }`}
    >
      {/* =====================================
          ANIMATED BACKGROUND
      ====================================== */}

      <div className="about-background">
        <div className="about-grid-bg"></div>

        <div className="about-orb about-orb-one"></div>
        <div className="about-orb about-orb-two"></div>
        <div className="about-orb about-orb-three"></div>

        <div className="about-noise"></div>
      </div>

      <div className="section-container">

        {/* =====================================
            SECTION HEADING
        ====================================== */}

        <div className="section-heading about-heading">

          <span className="section-number"></span>

          <div>
            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              A developer at the beginning of my
              professional journey.
            </h2>
          </div>

        </div>

        {/* =====================================
            MAIN ABOUT CONTENT
        ====================================== */}

        <div className="about-grid">

          {/* =====================================
              LEFT — PROFILE
          ====================================== */}

          <div className="about-profile">

            <div className="profile-frame">

              <div className="profile-corner corner-top-left"></div>
              <div className="profile-corner corner-top-right"></div>
              <div className="profile-corner corner-bottom-left"></div>
              <div className="profile-corner corner-bottom-right"></div>

              <img
                src="/profile.jpg"
                alt="Muhammad Azrul Din Isnari"
                className="about-profile-image"
              />

              <div className="profile-overlay"></div>

            </div>

            <div className="profile-status">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="profile-role">
              BSIT Graduate · Web Developer
            </p>


            {/* =====================================
                DOWNLOAD RESUME
            ====================================== */}

            <a
              href="/resume.pdf"
              download="Muhammad-Azrul-Din-Isnari-Resume.pdf"
              className="resume-button"
            >
              <span className="resume-icon">
                ↓
              </span>

              <span>
                Download Resume
              </span>
            </a>

          </div>


          {/* =====================================
              RIGHT — ABOUT TEXT
          ====================================== */}

          <div className="about-main">

            <p className="large-text">
              I'm{" "}
              <strong>
                Muhammad Azrul Din Isnari
              </strong>
              , a BSIT graduate from Zamboanga Peninsula
              Polytechnic State University with a strong
              interest in web development.
            </p>

            <p>
              I enjoy creating websites and web applications
              that are functional, responsive, and easy to use.
              Through academic and personal projects, I've gained
              hands-on experience with frontend development,
              backend development, databases, APIs, and
              modern web technologies.
            </p>

            <p>
              I'm currently looking for my first professional
              opportunity in the IT industry. I'm eager to learn
              from experienced developers, collaborate with a team,
              solve problems, and contribute to real-world projects.
            </p>


            {/* =====================================
                SKILLS / FOCUS
            ====================================== */}

            <div className="about-focus">

              <div className="focus-item">

                <span className="focus-number">
                  01
                </span>

                <div>
                  <h3>
                    Frontend
                  </h3>

                  <p>
                    Building responsive and user-friendly interfaces.
                  </p>
                </div>

              </div>


              <div className="focus-item">

                <span className="focus-number">
                  02
                </span>

                <div>
                  <h3>
                    Backend
                  </h3>

                  <p>
                    Creating APIs and server-side functionality.
                  </p>
                </div>

              </div>


              <div className="focus-item">

                <span className="focus-number">
                  03
                </span>

                <div>
                  <h3>
                    Database
                  </h3>

                  <p>
                    Working with data, SQL, and application storage.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;