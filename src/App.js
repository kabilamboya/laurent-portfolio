// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminSettings from './components/AdminSettings';
import Introduction from './components/Introduction';
import Hero from './components/Hero';
import OngoingProjects from './components/OngoingProjects';
import CompletedProjects from './components/CompletedProjects';
import Projects from './components/Projects';
import TechTip from './components/TechTip';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminUploader';
import PosterGallery from './components/PosterGallery';
import FloatingChatBot from './components/FloatingChatBot';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const [posters, setPosters] = useState([
    {
      title: "Poster 1",
      desc: "A bold visual statement on climate change.",
      image: "OneTechGITHU.jpg"
    },
    // ... up to 15 posters
  ]);

  useEffect(() => {
    const storedAdmin = localStorage.getItem('isAdmin');
    if (storedAdmin === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleUpload = (newPoster) => {
    setPosters([newPoster, ...posters]);
    setShowUploader(false);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setShowUploader(false);
    localStorage.removeItem('isAdmin');
  };

  const handleLogin = () => {
    setIsAdmin(true);
    localStorage.setItem('isAdmin', 'true');
  };

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={
            <>
              <Introduction />
              <Hero />
              <OngoingProjects />
              <CompletedProjects />
              <Projects />
              <TechTip />
              <PosterGallery posters={posters} />
              <FloatingChatBot />
              <Footer />
            </>
          }
        />

        {/* Admin Login Route */}
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
                    <button className="btn btn-outline-light me-2" onClick={() => setShowUploader(true)}>
                      <i className="bi bi-person-circle"></i> Upload
                    </button>
                    <button className="btn btn-outline-info me-2" onClick={() => (window.location.href = "/settings")}>
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
                  <PosterGallery posters={posters} />
                )}
              </div>
            ) : (
              <Navigate to="/admin" />
            )
          }
        />

        {/* Admin Settings Route */}
        <Route
          path="/settings"
          element={isAdmin ? <AdminSettings /> : <Navigate to="/admin" />}
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
