import React from 'react';

export default function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row text-center text-md-left">

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">Connect with Me</h5>
            <a href="#twitter" className="d-block text-warning mb-2">Twitter</a>
            <a href="#github" className="d-block text-warning mb-2">GitHub</a>
            <a href="#linkedin" className="d-block text-warning">LinkedIn</a>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">Contact Information</h5>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> laurentkabilamboya@syncfusion.com</li>
              <li><strong>Phone:</strong> +254 712 345678</li>
              <li><strong>Location:</strong> Nairobi, Kenya</li>
            </ul>
          </div>

          {/* Community Message */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">Community Initiative</h5>
            <p>Organizing local coding workshops for youth.</p>
          </div>

        </div>

        <hr className="bg-white" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Laurent Mboya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
