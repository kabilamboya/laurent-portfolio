// src/components/Introduction.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Introduction() {
  return (
    <section className="py-5" style={{ background: '#444' }}>
      <div className="container text-center">
        <h1 className="text-golden">Current Project:</h1>
        <h2 className="text-white">
          <Typewriter
            words={['Multi-Tenant', 'E-commerce System']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>
    </section>
  );
}
