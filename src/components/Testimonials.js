"use client";

import React from "react";

const testimonialsData = [
  {
    id: 1,
    username: "@johndoe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod justo ut magna volutpat.",
    avatarBg: "#007bff",
  },
  {
    id: 2,
    username: "@janedoe",
    feedback:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    avatarBg: "#e83e8c",
  },
  {
    id: 3,
    username: "@alexsmith",
    feedback:
      "Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula.",
    avatarBg: "#6f42c1",
  },
  {
    id: 4,
    username: "@sarahlee",
    feedback:
      "Excellent communicator and a fast learner. Always delivers above expectations!",
    avatarBg: "#28a745",
  },
  {
    id: 5,
    username: "@mikebrown",
    feedback:
      "Collaborating with Kabila was smooth and productive. Highly recommend!",
    avatarBg: "#fd7e14",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="container py-5">
      <h2 className="text-warning mb-4">Reviews & Testimonials</h2>

      {/* Scrollable Card Container */}
      <div
        className="card"
        style={{
          maxHeight: "300px",
          overflowY: "auto",
        }}
      >
        <div className="card-body">
          {testimonialsData.map(({ id, username, feedback, avatarBg }) => (
            <div
              key={id}
              className="d-flex align-items-start mb-3 pb-2 border-bottom"
            >
              <div
                className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: avatarBg,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  flexShrink: 0,
                  userSelect: "none",
                }}
                aria-label={`Avatar for ${username}`}
              >
                {username.charAt(1).toUpperCase()}
              </div>
              <div className="flex-grow-1 small text-muted">
                <strong className="d-block text-dark">{username}</strong>
                {feedback}
              </div>
            </div>
          ))}
        </div>
      </div>

      <small className="d-block text-end mt-3">
        <a
          href="#more-testimonials"
          className="text-decoration-none text-warning"
        >
          See all testimonials
        </a>
      </small>
    </section>
  );
}
