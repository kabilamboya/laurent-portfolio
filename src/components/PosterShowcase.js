// src/components/PosterShowcase.js
import React, { useState, useEffect, useCallback } from 'react';
import './PosterShowcase.css'; // Add the fade animation styles

export default function PosterShowcase({ posters }) {
  
  const topFivePosters = posters;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextPoster = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topFivePosters.length);
      setFade(true);
    }, 300); // matches the fade-out time
  }, [topFivePosters.length]);

  const prevPoster = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? topFivePosters.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(nextPoster, 6000);
    return () => clearInterval(timer);
  }, [nextPoster]);

  const { title, desc, image } = topFivePosters[currentIndex];

  return (
    <section className="container my-5 text-center">
      <h2 className="mb-4">🎨 Featured Posters</h2>

      <div className={`card shadow mx-auto poster-card ${fade ? 'fade-in' : 'fade-out'}`}>
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
            maxHeight: '400px',
            objectFit: 'cover'
          }}
        />
        <div className="card-body bg-light">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{desc}</p>
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-outline-primary me-2" onClick={prevPoster}>
          &larr; Previous
        </button>
        <button className="btn btn-outline-primary" onClick={nextPoster}>
          Next &rarr;
        </button>
      </div>

      <p className="mt-2 text-muted">
        Poster {currentIndex + 1} of {topFivePosters.length}
      </p>
    </section>
  );
}
