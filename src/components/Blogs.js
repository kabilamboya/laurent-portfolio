import React, { useState, useEffect } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Example headline 1",
    description:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    src:"/images/userA.jpg",
    ctaText: "Read more",
    ctaLink: "#",
  },
  {
    id: 2,
    title: "Example headline 2",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit.",
    src:"/images/userA.jpg",
    ctaText: "Read more",
    ctaLink: "#",
  },
  {
    id: 3,
    title: "Example headline 3",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    src:"/images/userA.jpg",
    ctaText: "Read more",
    ctaLink: "#",
  },
  {
    id: 4,
    title: "Example headline 4",
    description: "Aenean lacinia bibendum nulla sed consectetur.",
    src:"/images/userA.jpg",
    ctaText: "Read more",
    ctaLink: "#",
  },
  {
    id: 5,
    title: "Example headline 5",
    description: "Maecenas sed diam eget risus varius blandit.",
    src:"/images/userA.jpg",
    ctaText: "Read more",
    ctaLink: "#",
  },
];

export default function Blogs() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % blogPosts.length);
    }, 5000); // rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleBlogs = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      return blogPosts[(startIndex + i) % blogPosts.length];
    });
  };

  return (
    <section id="blogs" className="container py-5">
      <h2 className="text-warning mb-4">Blogs</h2>
      <div className="row">
        {getVisibleBlogs().map(({ id, title, description, src, ctaText, ctaLink }) => (
          <div className="col-md-4 mb-4" key={id}>
            <div className="card h-100 shadow-sm">
              <img
                src={src}
                alt={title}
                className="card-img-top"
                style={{ height: 200, objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={ctaLink} className="btn btn-warning mt-auto">
                  {ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
