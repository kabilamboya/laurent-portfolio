// src/components/CompletedProjects.js
import React from 'react';

const completed = [
  { title: 'Open Library API', quote: '“Laurent’s library API helped us scale our services!” – Tech Magazine' },
  { title: 'Data Visualization Tool', quote: '“An intuitive tool that transformed our reports.” – DataCorp' },
];

export default function CompletedProjects() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-golden mb-4">Completed Projects</h2>
        <div className="row">
          {completed.map((proj, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
              <div className="p-4 bg-dark text-white rounded">
                <h5>{proj.title}</h5>
                <blockquote className="blockquote text-warning">
                  <p>{proj.quote}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
