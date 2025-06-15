"use client";

import React from "react";

export default function Header() {
  return (
    <header className="mb-5 text-center">
      {/* Navigable Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mx-auto">
              <li className="nav-item">
                <a className="nav-link text-warning" href="#hero">Testing Engineer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="#portfolio">Graphic Designer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="#portfolio">Video Editor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="#about">Technical Writer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
