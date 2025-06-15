import React from 'react';
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import lkmImage from '../assets/LaurentKabilaMboya.JPG';

export default function Hero() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f0fdf4', padding: '0 1.5rem' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6 text-center text-md-start d-flex flex-column align-items-center align-items-md-start gap-3 mb-4 mb-md-0">
            <img
              src={lkmImage}
              alt="Kabila Mboya"
              className="rounded-circle shadow"
              style={{ width: "180px", height: "180px", objectFit: "cover" }}
            />
            <h2 className="fw-bold mb-0">
              Hi, I’m <span style={{ color: '#065f46' }}>Kabila Mboya</span>
            </h2>
            <div className="d-flex gap-3 fs-4">
              <a href="https://twitter.com/kabilamboya" target="_blank" rel="noopener noreferrer" className="text-warning" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://github.com/kabilamboya" target="_blank" rel="noopener noreferrer" className="text-warning" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kabila-mboya-b3375a178/" target="_blank" rel="noopener noreferrer" className="text-warning" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com/kabilamboya" target="_blank" rel="noopener noreferrer" className="text-warning" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="mailto:kabilamboya@gmail.com" className="text-warning" aria-label="Gmail">
                <SiGmail />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 d-flex flex-column gap-3 text-center text-md-start">
            <h3 className="fw-semibold text-success">
              I'm passionate about emerging tech trends and seamless digital experiences.
            </h3>
            <p className="text-muted">
              Software QA Engineer, Digital Creative and Technical Writer.
            </p>
            <button
              onClick={() => window.launchChatbot?.()}
              className="btn align-self-center align-self-md-start"
              style={{
                backgroundColor: "#a7f3d0",
                color: "#065f46",
                padding: "0.6rem 1.4rem",
                fontWeight: "600",
                borderRadius: "8px",
                border: "2px solid #34d399",
              }}
            >
              Let’s Create Something Great Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
