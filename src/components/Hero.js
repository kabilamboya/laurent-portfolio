import React from 'react';

export default function Hero() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="featurette-heading fw-bold">
                Hi, I’m <strong>Kabila Mboya</strong>
              </h2>
              <p>
                Laurent is a software engineer, graphic designer, video editor, and technical writer passionate
                about emerging trends and seamless digital experiences.
                His mission is to leverage technology for social good and open-source collaboration.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/LaurentKabilaMboya.JPG"
                alt="Laurent Mboya"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="hero"
        className="py-5 mb-5"
        style={{ backgroundColor: "#333333", color: "#fff" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Image + Text */}
            <div className="col-lg-6 col-md-12 d-flex flex-column align-items-start justify-content-center gap-3 ps-lg-5 mb-4 mb-lg-0">
              <img
                src="/images/LaurentKabilaMboya.JPG"
                alt="Kabila Mboya"
                className="rounded-circle"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
              <h2 className="featurette-heading fw-bold">
                Hi, I’m <strong>Kabila Mboya</strong>
              </h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.5, maxWidth: "420px" }}>
                Testing Engineer, Graphic Designer, Video Editor, and Technical writer passionate
                about emerging trends and seamless digital experiences.
              </p>
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

            {/* Right: Skills */}
            <div className="col-lg-6 col-md-12">
              <section id="proficiency">
                <h2 className="text-primary mb-4">Proficiency Levels</h2>

                {[
                  { label: "Technical", percent: 85, color: "bg-success" },
                  { label: "Analytical", percent: 80, color: "bg-info" },
                  { label: "Logic", percent: 85, color: "bg-warning" },
                  { label: "Problem Solving", percent: 89, color: "bg-solid" },
                  { label: "Organization", percent: 90, color: "bg-danger" },
                  { label: "Management", percent: 75, color: "" },
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
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
