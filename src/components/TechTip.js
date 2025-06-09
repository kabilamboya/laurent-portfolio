// src/components/TechTip.js
import React from 'react';

export default function TechTip() {
  const tip = "Stay curious! Explore a new JS framework or library every week to broaden your skill set.";
  return (
    <section className="py-5 bg-secondary text-white">
      <div className="container text-center">
        <h2 className="text-golden">Today's Tech Tip</h2>
        <p className="lead">{tip}</p>
      </div>
    </section>
  );
}
