import React, { useState } from 'react';
import '../PosterGallery.css';
import PosterModal from '../admin/PosterModal';

const PosterGallery = ({ posters }) => {
  const postersPerPage = 15;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedPoster, setSelectedPoster] = useState(null);

  // Highlight matched text
  const highlightMatch = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  };

  // Filter and paginate posters
  const filteredPosters = posters.filter(
    poster =>
      poster.title.toLowerCase().includes(search.toLowerCase()) ||
      poster.desc.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosters.length / postersPerPage);
  const startIndex = (page - 1) * postersPerPage;
  const visiblePosters = filteredPosters.slice(startIndex, startIndex + postersPerPage);

  const openModal = (poster) => setSelectedPoster(poster);
  const closeModal = () => setSelectedPoster(null);

  return (
    <div className="container mt-4">
      <h3>Graphics Designed</h3>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or description..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Posters Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        {visiblePosters.map((poster, i) => (
          <div className="col" key={i}>
            <div
              className="card h-100"
              style={{ cursor: 'pointer' }}
              onClick={() => openModal(poster)}
            >
              <img
                src={poster.image}
                className="card-img-top"
                alt={poster.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body" style={{ backgroundColor: '#f0f0f0' }}>
                <h5 className="card-title" title={poster.title}>
                  {highlightMatch(
                    poster.title.length > 25
                      ? `${poster.title.slice(0, 25)}...`
                      : poster.title,
                    search
                  )}
                </h5>
                <p className="card-text" title={poster.desc}>
                  {highlightMatch(
                    poster.desc.length > 60
                      ? `${poster.desc.slice(0, 60)}...`
                      : poster.desc,
                    search
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-container d-flex justify-content-center align-items-center mt-3">
        <button
          className="btn btn-outline-secondary mx-2"
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages || 1}
        </span>
        <button
          className="btn btn-outline-secondary mx-2"
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>
      </div>

      {/* Modal Display */}
      {selectedPoster && (
        <PosterModal poster={selectedPoster} onClose={closeModal} />
      )}
    </div>
  );
};

export default PosterGallery;
