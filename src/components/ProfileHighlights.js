"use client";

import React from "react";
import "../Skills.css"; // <-- Make sure this file includes the styles from the new skills design

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
      'Edited promotional videos, managed YouTube content, and added motion graphics.',
  },
];

const skills = [
  { name: 'Manual Testing', level: 90 },
  { name: 'Automation Testing', level: 75 },
  { name: 'Photoshop', level: 80 },
  { name: 'Illustrator', level: 70 },
  { name: 'Premiere Pro', level: 85 },
  { name: 'After Effects', level: 78 },
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

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="text-primary mb-4 text-center">Skills & Competence</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span>{skill.name}</span>
              <div className="progress-bar">
                <div className="filled" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="percent">{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
