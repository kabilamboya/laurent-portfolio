// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Components
import Introduction from './components/Introduction';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProfileHighlights from './components/ProfileHighlights';
import CompletedProjects from './components/CompletedProjects';
import PosterShowcase from './components/PosterShowcase';
import TechTip from './components/TechTip';
import Footer from './components/Footer';
import FloatingChatBot from './components/FloatingChatBot';

// Admin Components
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminUploader';
import AdminSettings from './components/AdminSettings';

// Poster
import posters from '../data/posters';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const [posters, setPosters] = useState(defaultPosters);

  useEffect(() => {
    if (localStorage.getItem('isAdmin') === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAdmin(true);
    localStorage.setItem('isAdmin', 'true');
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setShowUploader(false);
    localStorage.removeItem('isAdmin');
  };

  const handleUpload = (newPoster) => {
    setPosters([newPoster, ...posters]);
    setShowUploader(false);
  };

  return (
    <Router>
      <Routes>

        {/* Public Home */}
        <Route
          path="/"
          element={
            <>
              <main className="container my-4">
                <Introduction />
                <Hero />
                <Skills />
                <ProfileHighlights />
                <CompletedProjects />
                <PosterShowcase posters={posters} />
                <TechTip />
              </main>
              <FloatingChatBot />
              <Footer />
            </>
          }
        />

        {/* Admin Login */}
        <Route
          path="/admin"
          element={isAdmin ? <Navigate to="/dashboard" /> : <AdminLogin onLogin={handleLogin} />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/dashboard"
          element={
            isAdmin ? (
              <div>
                <div className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
                  <h4 className="m-0">Poster Portal</h4>
                  <div>
                    <button
                      className="btn btn-outline-light me-2"
                      onClick={() => setShowUploader(true)}
                    >
                      <i className="bi bi-upload"></i> Upload
                    </button>
                    <button
                      className="btn btn-outline-info me-2"
                      onClick={() => (window.location.href = "/settings")}
                    >
                      Settings
                    </button>
                    <button className="btn btn-outline-warning" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>

                {showUploader ? (
                  <AdminPanel onUpload={handleUpload} />
                ) : (
                  <PosterShowcase posters={posters} />
                )}
              </div>
            ) : (
              <Navigate to="/admin" />
            )
          }
        />

        {/* Admin Settings */}
        <Route
          path="/settings"
          element={isAdmin ? <AdminSettings /> : <Navigate to="/admin" />}
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
