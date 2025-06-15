"use client";

import React from "react";

const experiences = [
  {
    id: 1,
    title: 'QA Tester at Syncfusion - 2 years',
    description:
      'Worked on testing CRM modules, writing test cases, and performing bug triage.',
  },
  {
    id: 2,
    title: 'Graphic Designer - Freelance',
    description:
      'Designed branding materials, social media creatives, and UI mockups.',
  },
  {
    id: 3,
    title: 'Video Editor - Janta Prints',
    description:
      'Edited promotional videos, managed YouTube content, and added motion graphics for social media.',
  },
];

export default function ProfileHighlights() {
  return (
    <div className="container py-5">

      {/* Professional Experience Section */}
      <section id="experiences" className="mb-5">
        <h2 className="text-warning mb-4">Professional Experience</h2>
        <div className="row">
          {experiences.map(({ id, title, description }) => (
            <div key={id} className="col-md-4 mb-3">
              <div className="card bg-dark text-light shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-warning">{title}</h5>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
