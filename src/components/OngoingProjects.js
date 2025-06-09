// src/components/OngoingProjects.js
import React from 'react';

const ongoing = [
  { title: 'AI Chatbot', desc: 'Developing an advanced chatbot using NLP.' },
  { title: 'Mobile App', desc: 'Building a cross-platform mobile app for education.' },
  { title: 'Web Portal', desc: 'Creating a React-based portal for nonprofits.' },
];

export default function OngoingProjects() {
  return (
    <section className="py-5 bg-secondary">
      <div className="container">
        <h2 className="text-golden mb-4">Ongoing Projects</h2>
        <div className="row">
          {ongoing.map((proj, idx) => (
            <div className="col-sm-6 col-lg-4 mb-3" key={idx}>
              <div className="card h-100 bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
