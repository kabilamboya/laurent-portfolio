"use client";

import React from "react";

const experiences = [
  {
    id: 1,
    title: 'QA Tester at Syncfusion - 2 years',
    description:
      'Description of Certificate 1. Details about the course, skills gained, and issuer.',
  },
  {
    id: 2,
    title: 'Graphic Designer - Freelance',
    description:
      'Description of Certificate 2. Details about the course, skills gained, and issuer.',
  },
  {
    id: 3,
    title: 'Video Editor - Janta Prints',
    description:
      'Description of Certificate 3. Details about the course, skills gained, and issuer.',
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="container py-5">
      <h2 className="text-warning mb-4">Professional Experience</h2>
      
      <div className="row">
        {experiences.map(({ id, title, description }) => (
          <div key={id} className="col-md-4 mb-4">
            <h3>{title}</h3>
            <p>{description}</p>
            {/* Optionally add a button or link here per certificate */}
          </div>
        ))}
      </div>
    </section>
  );
}
