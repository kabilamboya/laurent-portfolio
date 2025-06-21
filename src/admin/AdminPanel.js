// src/admin/AdminPanel.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import blogsData from "./Blogs";
import projectsData from "./Projects";
import postersData from "./PosterGallery";
import AdminUploader from "./AdminUploader";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState(blogsData);
  const [projects, setProjects] = useState(projectsData);
  const [posters, setPosters] = useState(postersData);
  const [showUploader, setShowUploader] = useState(false);

  const handleBlogChange = (index, field, value) => {
    const updated = [...blogs];
    updated[index][field] = value;
    setBlogs(updated);
  };

  const handleProjectChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const handlePosterChange = (index, field, value) => {
    const updated = [...posters];
    updated[index][field] = value;
    setPosters(updated);
  };

  const handleUpload = (newPoster) => {
    setPosters([newPoster, ...posters]);
    setShowUploader(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav onUploadClick={() => setShowUploader(true)} />

      <div className="container mx-auto p-4 space-y-10">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Manage Posters"
            description="Upload and organize your poster showcase."
            onClick={() => navigate("#poster-section")}
          />
          <Card
            title="Manage Blogs"
            description="Update blog content for your portfolio."
            onClick={() => navigate("#blog-section")}
          />
          <Card
            title="Manage Projects"
            description="Edit and manage your featured projects."
            onClick={() => navigate("#project-section")}
          />
        </div>

        {/* Uploader */}
        {showUploader && (
          <div className="bg-white p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Upload Poster</h2>
            <AdminUploader onUpload={handleUpload} />
          </div>
        )}

        {/* Settings Sections */}
        <div className="bg-white rounded-lg shadow p-5" id="blog-section">
          <h3 className="text-lg font-semibold mb-3">Manage Blogs</h3>
          {blogs.map((blog, index) => (
            <div key={index} className="mb-4 border-b pb-3">
              <input
                className="form-control mb-2"
                value={blog.title}
                onChange={(e) => handleBlogChange(index, "title", e.target.value)}
              />
              <textarea
                className="form-control"
                value={blog.content}
                onChange={(e) => handleBlogChange(index, "content", e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-5" id="project-section">
          <h3 className="text-lg font-semibold mb-3">Manage Projects</h3>
          {projects.map((project, index) => (
            <div key={index} className="mb-4 border-b pb-3">
              <input
                className="form-control mb-2"
                value={project.title}
                onChange={(e) => handleProjectChange(index, "title", e.target.value)}
              />
              <input
                className="form-control"
                value={project.quote}
                onChange={(e) => handleProjectChange(index, "quote", e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-5" id="poster-section">
          <h3 className="text-lg font-semibold mb-3">Poster Gallery</h3>
          {posters.map((poster, index) => (
            <div key={index} className="mb-3">
              <input
                className="form-control"
                value={poster.img}
                onChange={(e) => handlePosterChange(index, "img", e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow p-5 cursor-pointer hover:shadow-lg transition"
    >
      <h4 className="text-xl font-bold mb-2 text-gray-700">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
