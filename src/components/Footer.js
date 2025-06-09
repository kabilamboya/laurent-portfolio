// src/components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4 bg-dark text-white">
      <div className="container text-center">
        <p>Connect with me on social media:</p>
        <a href="#twitter" className="text-warning mx-2">Twitter</a>
        <a href="#github" className="text-warning mx-2">GitHub</a>
        <a href="#linkedin" className="text-warning mx-2">LinkedIn</a>
        <hr className="bg-white" />
        <p>Community initiative: Organizing local coding workshops for youth.</p>
        <p>&copy; {new Date().getFullYear()} Laurent Mboya</p>
      </div>
    </footer>
  );
}
