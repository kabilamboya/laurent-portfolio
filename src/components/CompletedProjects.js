// src/components/CompletedProjects.js
import React from 'react';

const completed = [
  {
    title: 'Kevino Drilling and Construction Website',
    quote: 'Offering services remotely through the web. Western Region',
  },
  {
    title: 'Janta Prints Online Branding',
    quote: 'Building a reliable digital presence. Kisumu city',
  },
  {
    title: 'Infinite Liquir & Cocktails',
    quote: 'Pool-table + cocktail vibe. Toi Market .',
  },
  {
    title: 'Lakeside Media Services',
    quote: 'Reliable Technician and Internet Provider. Homabay Town',
  },
  {
    title: 'Westhood Restaurant',
    quote: 'Quick food. On the go. Westands - Nairobi.',
  },
];

export default function CompletedProjects() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-warning text-center mb-5">Completed Projects</h2>
        <div className="row">
          {completed.map((proj, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
              <div className="bg-secondary p-4 h-100 shadow-sm border border-warning border-opacity-25">
                <h5 className="text-white fw-bold">{proj.title}</h5>
                <blockquote className="blockquote mt-3">
                  <p className="mb-0 text-warning fst-italic">"{proj.quote}"</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
