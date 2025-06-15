import React from 'react';
import './PosterModal.css';

const PosterModal = ({ poster, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={poster.image} alt={poster.title} className="modal-img" />
        <div className="modal-content">
          <h4>{poster.title}</h4>
          <p>{poster.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PosterModal;
