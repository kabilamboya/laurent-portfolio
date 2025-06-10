import React from 'react';
import lkmImage from '../images/LaurentKabilaMboya.JPG'; // Assuming you have an image for Ray
export default function Hero() {
  return (
    <>
      {/* Introduction Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Column: Image and CTA */}
            <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center gap-3 mb-4 mb-md-0">
              <img
                src={lkmImage}
                alt="Kabila Mboya"
                className="rounded-circle"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
              <a
                href="#contact"
                className="btn"
                style={{
                  backgroundColor: "#a7f3d0",
                  color: "#065f46",
                  padding: "0.6rem 1.4rem",
                  fontWeight: "600",
                  borderRadius: "6px",
                  border: "2px solid #34d399",
                  transition: "background-color 0.3s, color 0.3s",
                  cursor: "pointer"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#34d399";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#a7f3d0";
                  e.currentTarget.style.color = "#065f46";
                }}
              >
                Let's create something amazing together!
              </a>
            </div>

            {/* Right Column: Heading and Intro */}
            <div className="col-md-6 text-center text-md-start">
              <h2 className="featurette-heading fw-bold">
                Hi, I’m <strong>Kabila Mboya</strong>
              </h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.5 }}>
                Testing Engineer, Graphic Designer, Video Editor, and Technical Writer passionate
                about emerging trends and seamless digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Banner with Skills */}
      <section
        id="hero"
        className="py-5 mb-5"
        style={{ backgroundColor: "#333333", color: "#fff" }}
      >
        <div className="container">
          <div className="row">

            {/* Technical Proficiency */}
            <div className="col-md-6 mb-4">
              <h2 className="text-primary mb-4">Technical Proficiency</h2>
              {[
                { label: "Technical", percent: 85, color: "bg-success" },
                { label: "Analytical", percent: 80, color: "bg-info" },
                { label: "Logic", percent: 85, color: "bg-warning" },
                { label: "Problem Solving", percent: 89, color: "bg-secondary" },
                { label: "Organization", percent: 90, color: "bg-danger" },
                { label: "Management", percent: 75, color: "bg-primary" },
              ].map(({ label, percent, color }) => (
                <div
                  key={label}
                  className="progress mb-3"
                  style={{ borderRadius: "10px", overflow: "hidden", height: "30px" }}
                >
                  <div
                    className={`progress-bar ${color}`}
                    role="progressbar"
                    style={{ width: `${percent}%`, lineHeight: "30px" }}
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="col-md-6 mb-4">
              <h3 className="text-warning mb-4">Soft Skills</h3>
              {[
                { label: "Communication", percent: 88, color: "bg-info" },
                { label: "Creativity", percent: 82, color: "bg-success" },
                { label: "Teamwork", percent: 86, color: "bg-primary" },
                { label: "Adaptability", percent: 80, color: "bg-warning" },
                { label: "Time Management", percent: 84, color: "bg-danger" },
                { label: "Leadership", percent: 78, color: "bg-secondary" },
              ].map(({ label, percent, color }) => (
                <div
                  key={label}
                  className="progress mb-3"
                  style={{ borderRadius: "10px", overflow: "hidden", height: "30px" }}
                >
                  <div
                    className={`progress-bar ${color}`}
                    role="progressbar"
                    style={{ width: `${percent}%`, lineHeight: "30px" }}
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
