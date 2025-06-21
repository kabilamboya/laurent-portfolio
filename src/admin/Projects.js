"use client";

import React from "react";

export default function Projects() {
  const completedProjects = [
    {
      title: "Responsive Website",
      description: "A complete responsive website built using HTML/CSS.",
      time: "2 weeks",
      image: "/images/userA.jpg",
    },
    {
      title: "React Dashboard",
      description: "React-based dashboard with charts and auth.",
      time: "3 weeks",
      image: "/images/userA.jpg",
    },
    {
      title: "Logo Designs",
      description: "Designed 10+ brand logos with Adobe Illustrator.",
      time: "1 week",
      image: "/images/userA.jpg",
    },
  ];

  const ongoingProjects = [
    {
      title: "Portfolio Redesign",
      description: "Portfolio redesign using Tailwind and React.",
      time: "In progress",
      image: "/images/userA.jpg",
    },
    {
      title: "E-commerce API",
      description: "E-commerce API with Node.js and MongoDB.",
      time: "Ongoing",
      image: "/images/userA.jpg",
    },
    {
      title: "Video Editor Tool",
      description: "Browser-based video editor using WebAssembly.",
      time: "Ongoing",
      image: "/images/userA.jpg",
    },
  ];

  const renderProjectCard = (project, index) => (
    <div className="col" key={index}>
      <div className="card shadow-sm h-100">
        <img
          src={project.image}
          alt={project.title}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <button className="btn btn-sm btn-outline-warning">View</button>
            <small className="text-muted">{project.time}</small>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-warning mb-4">Projects</h2>

      {/* Completed Projects */}
      <h4 className="text-light mb-3">Completed</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
        {completedProjects.map(renderProjectCard)}
      </div>

      {/* Ongoing Projects */}
      <h4 className="text-light mb-3">Ongoing</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {ongoingProjects.map(renderProjectCard)}
      </div>
    </section>
  );
}
