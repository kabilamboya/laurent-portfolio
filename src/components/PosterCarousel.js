
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const posterImages = [
  {
    id: 1,
    src: 'OneTechGITHU.jpg',
    alt: 'Poster 1',
    title: 'Minimalist Typography',
    description: 'A sleek design featuring bold sans-serif type on a muted background.'
  },
  {
    id: 2,
    src: 'OCLOKinvoice.jpg',
    alt: 'Poster 2',
    title: 'Retro Vibes',
    description: 'Inspired by 80s neon colors and vintage print textures.'
  },
  {
    id: 3,
    src: '420.jpg',
    alt: 'Poster 3',
    title: 'Nature Reimagined',
    description: 'A blend of landscape photography and surreal digital art.'
  },
];

const PosterCarousel = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Poster Designs</h2>
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
        {posterImages.map((poster) => (
          <SwiperSlide key={poster.id}>
            <div className="card h-100 border-0 shadow-sm">
              <img src={poster.src} className="card-img-top" alt={poster.alt} />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">{poster.title}</h5>
                <p className="card-text">{poster.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PosterCarousel;
