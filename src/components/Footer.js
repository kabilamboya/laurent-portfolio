import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row text-center text-md-left">

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">Connect with Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://twitter.com/kabilamboya" target="_blank" rel="noopener noreferrer" className="text-warning fs-4">
                <FaTwitter />
              </a>
              <a href="https://github.com/kabilamboya" target="_blank" rel="noopener noreferrer" className="text-warning fs-4">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kabila-mboya-b3375a178/" target="_blank" rel="noopener noreferrer" className="text-warning fs-4">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">Contact Information</h5>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> laurentmboya@gmail.com</li>
              <li><strong>Phone:</strong> +254 732 37 9292</li>
              <li><strong>Location:</strong> Nairobi, Kenya</li>
            </ul>
          </div>

          {/* Community Message */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">Community Initiative</h5>
            <p>Organizing local coding workshops for youth.</p>
            <p>We believe in the power of technology to transform lives.</p>
            <p>Join us in empowering the next generation of developers!</p>
          </div>

        </div>

        <hr className="bg-white" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} O!clok Media. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
