      
      "use client";
      
      import React from "react";
      
      export default function Proficiency() {
        return (
        <section id="proficiency" className="mb-5 container">
        <h2 className="text-primary">Proficiency Levels</h2>

        <div className="progress mb-2">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: '25%' }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            Technical
          </div>
        </div>

        <div className="progress mb-2">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: '50%' }}
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            Analytical
          </div>
        </div>

        <div className="progress mb-2">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: '75%' }}
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            Logic
          </div>
        </div>

        <div className="progress mb-2">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: '100%' }}
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            Graphic
          </div>
        </div>

        <div className="progress mb-2">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: '25%' }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            Front End Development
          </div>
        </div>
      </section>
        );
      } 