import React from 'react';
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row text-center text-md-start align-items-start">

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning mb-3">Connect with Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start flex-wrap gap-3">
              <a
                href="https://twitter.com/kabilamboya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-4"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/kabilamboya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-4"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kabila-mboya-b3375a178/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-4"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/kabilamboya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-4"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="mailto:kabilamboya@gmail.com"
                className="text-warning fs-4"
                aria-label="Gmail"
              >
                <SiGmail />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning mb-3">Contact Information</h5>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> laurentmboya@gmail.com</li>
              <li><strong>Phone:</strong> +254 732 37 9292</li>
              <li><strong>Location:</strong> Nairobi, Kenya</li>
            </ul>
          </div>

          {/* Community Message */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning mb-3">Community Initiative</h5>
            <p>Organizing local coding workshops for kids, youth, and adults.</p>
            <p>Free Cyber Mockups and Templates.</p>
            <p>Open source Dholuo LLM!</p>
          </div>
          {/* In Introduction, Footer, or wherever you want it visible*/}
          <button
            onClick={() => window.location.href = "/admin"}
            className="text-sm text-gray-400 hover:underline">
            Admin Settings
          </button>
            <p className="text-center text-xs text-gray-400 mt-10">
              <a
                href="/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Admin Settings
              </a>
            </p>


        </div>

        <hr className="bg-white" />

        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} O!clok Media. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
