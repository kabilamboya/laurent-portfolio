      "use client";
      
      import React from "react";
      
      export default function Skills() {
        return (
        <section id="skills" className="mb-5 container">
        <h2 className="text-primary">Skills & Competence</h2>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div className="card bg-dark text-light shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-warning">Testing</h5>
                  <ul className="list-group">
                    <li className="list-group-item bg-dark text-light">Manual Testing</li>
                    <li className="list-group-item bg-dark text-light">Automation Testing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card bg-dark text-light shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-warning">Graphic Design</h5>
                  <ul className="list-group">
                    <li className="list-group-item bg-dark text-light">Photoshop</li>
                    <li className="list-group-item bg-dark text-light">Illustrator</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card bg-dark text-light shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-warning">Video Editing</h5>
                  <ul className="list-group">
                    <li className="list-group-item bg-dark text-light">Premiere Pro</li>
                    <li className="list-group-item bg-dark text-light">After Effects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        );
      } 