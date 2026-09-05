import { useEffect, useRef, useState } from "react";
import "./Education.css";

function Education() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const section = sectionRef.current;

    if (!section) return;

    const rect = section.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    section.style.setProperty("--mouse-x", `${x}`);
    section.style.setProperty("--mouse-y", `${y}`);
  };

  const handleMouseLeave = () => {
    const section = sectionRef.current;

    if (!section) return;

    section.style.setProperty("--mouse-x", "0");
    section.style.setProperty("--mouse-y", "0");
  };

  return (
    <section
      ref={sectionRef}
      id="education"
      className={`section education-section ${
        visible ? "education-visible" : ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className="education-background">
        <img
          src="/ZPPSU1.jpg"
          alt="Zamboanga Peninsula Polytechnic State University"
        />

        <div className="education-background-overlay"></div>
      </div>

      {/* Decorative elements */}
      <div className="education-grid"></div>

      <div className="education-orb education-orb-one"></div>
      <div className="education-orb education-orb-two"></div>

      <div className="section-container education-container">

        {/* Heading */}
        <div className="section-heading education-heading">

          <div className="education-heading-number">
            <span className="section-number">
              
            </span>

            <span className="education-line"></span>
          </div>

          <div className="education-heading-content">

            <p className="section-label">
              EDUCATION
            </p>

            <h2>
              My academic background.
            </h2>

            <p className="education-intro">
              The foundation that shaped my skills in programming,
              web development, and information technology.
            </p>

          </div>

        </div>

        {/* Education Card */}
        <div className="education-card-wrapper">

          <div className="education-card">

            {/* Left side */}
            <div className="education-year-column">

              <span className="education-small-label">
                DEGREE
              </span>

              <div className="education-year">
                BSIT
              </div>

              <span className="education-year-description">
                Bachelor of Science
                <br />
                in Information Technology
              </span>

            </div>

            {/* Divider */}
            <div className="education-divider"></div>

            {/* Right side */}
            <div className="education-content">

              <p className="education-label">
                BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
              </p>

              <h3>
                Zamboanga Peninsula
                <br />
                Polytechnic State University
              </h3>

              <div className="education-location">
                <span className="location-dot"></span>

                <span>
                  Zamboanga City, Philippines
                </span>
              </div>

              <p className="education-description">
                My academic journey provided me with a strong foundation
                in programming, software development, databases, and
                information technology. It also gave me opportunities
                to develop practical projects and strengthen my
                problem-solving skills.
              </p>

              {/* Skills */}
              <div className="education-tags">

                <span>
                  Programming
                </span>

                <span>
                  Web Development
                </span>

                <span>
                  Information Technology
                </span>

              </div>

            </div>

          </div>

          {/* Bottom detail */}
          <div className="education-footer">

            <span>
              EDUCATION
            </span>

            <span className="education-footer-line"></span>

            <span>
              ZPPSU
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;