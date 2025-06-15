// src/components/TechTip.js
import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

export default function TechTip() {
  const tip = "Stay curious! Explore a new JS framework or library every week to broaden your skill set.";

  return (
    <section className="py-5 bg-dark text-white fade-in">
      <div className="container d-flex justify-content-center">
        <div className="card bg-secondary text-white shadow-lg border-0 rounded-4 p-4" style={{ maxWidth: '600px' }}>
          <div className="card-body text-center">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <FaLightbulb className="text-warning me-2" size={28} />
              <h4 className="card-title text-warning m-0">Today's Tech Tip</h4>
            </div>
            <p className="card-text lead fst-italic">{tip}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
