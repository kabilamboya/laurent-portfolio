import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../PosterModal.css'; // For modal styling

const posters = [
  {
    id: 1,
    image: 'OneTechGITHU.jpg',
    title: 'Minimalist Typography',
    desc: 'A sleek design featuring bold sans-serif type on a muted background.'
  },
  {
    id: 2,
    image: 'OCLOKinvoice.jpg',
    title: 'Retro Vibes',
    desc: 'Inspired by 80s neon colors and vintage print textures.'
  },
  {
    id: 3,
    image: '420.jpg',
    title: 'Nature Reimagined',
    desc: 'A blend of landscape photography and surreal digital art.'
  },
  // Add more posters as needed
];

const PosterShowcase = () => {
  const postersPerPage = 15;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedPoster, setSelectedPoster] = useState(null);

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? <mark key={i}>{part}</mark> : part
    );
  };

  const filteredPosters = posters.filter(
    poster =>
      poster.title.toLowerCase().includes(search.toLowerCase()) ||
      poster.desc.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosters.length / postersPerPage);
  const startIndex = (page - 1) * postersPerPage;
  const visiblePosters = filteredPosters.slice(startIndex, startIndex + postersPerPage);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Poster Showcase</h2>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {posters.map((poster) => (
          <SwiperSlide key={poster.id}>
            <div className="card h-100 border-0 shadow-sm" onClick={() => setSelectedPoster(poster)}>
              <img src={poster.image} className="card-img-top" alt={poster.title} />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">{poster.title}</h5>
                <p className="card-text">{poster.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Search Input */}
      <div className="mt-5 mb-4">
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

      {/* Poster Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        {visiblePosters.map((poster, i) => (
          <div className="col" key={i} onClick={() => setSelectedPoster(poster)}>
            <div className="card h-100">
              <img
                src={poster.image}
                className="card-img-top"
                alt={poster.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body" style={{ backgroundColor: '#f0f0f0' }}>
                <h5 className="card-title" title={poster.title}>
                  {highlightMatch(
                    poster.title.length > 25 ? poster.title.slice(0, 25) + '...' : poster.title,
                    search
                  )}
                </h5>
                <p className="card-text" title={poster.desc}>
                  {highlightMatch(
                    poster.desc.length > 60 ? poster.desc.slice(0, 60) + '...' : poster.desc,
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
        <span>Page {page} of {totalPages || 1}</span>
        <button
          className="btn btn-outline-secondary mx-2"
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {selectedPoster && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <button className="close-btn" onClick={() => setSelectedPoster(null)}>×</button>
            <img src={selectedPoster.image} alt={selectedPoster.title} className="modal-img" />
            <div className="modal-content">
              <h4>{selectedPoster.title}</h4>
              <p>{selectedPoster.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PosterShowcase;
