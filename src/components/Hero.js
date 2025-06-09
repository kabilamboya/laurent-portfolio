// src/components/Hero.js
import React from 'react';

export default function Hero() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="text-golden">About Laurent</h2>
            <p>Laurent is a software engineer passionate about AI and community-driven projects. His mission is to leverage technology for social good and open-source collaboration.</p>
          </div>
          <div className="col-md-6">
            {/* Placeholder image or graphic */}
            <img src="https://via.placeholder.com/300" alt="Laurent Mboya" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
