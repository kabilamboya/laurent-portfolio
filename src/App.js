// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminSettings from './components/AdminSettings';
import Introduction from './components/Introduction';
import Hero from './components/Hero';
import ProfileHighlights from './components/ProfileHighlights';
import OngoingProjects from './components/OngoingProjects';
import CompletedProjects from './components/CompletedProjects';
import Projects from './components/Projects';
import TechTip from './components/TechTip';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminUploader';
import PosterShowcase from './components/PosterShowcase';
import FloatingChatBot from './components/FloatingChatBot';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const [posters, setPosters] = useState([
    {
      title: "Poster 1",
      desc: "A bold visual statement on climate change.",
      image: "https://via.placeholder.com/300x400?text=Poster+1"
    },
    {
      title: "Poster 2",
      desc: "Exploring the future of sustainable energy.",
      image: "https://via.placeholder.com/300x400?text=Poster+2"
    },
    {
      title: "Poster 3",
      desc: "Visualizing digital transformation in education.",
      image: "https://via.placeholder.com/300x400?text=Poster+3"
    },
    {
      title: "Poster 4",
      desc: "The beauty of AI and machine learning illustrated.",
      image: "https://via.placeholder.com/300x400?text=Poster+4"
    },
    {
      title: "Poster 5",
      desc: "Healthcare innovations that save lives.",
      image: "https://via.placeholder.com/300x400?text=Poster+5"
    },
    {
      title: "Poster 6",
      desc: "Urban planning and smart cities.",
      image: "https://via.placeholder.com/300x400?text=Poster+6"
    },
    {
      title: "Poster 7",
      desc: "Diversity and inclusion in tech workplaces.",
      image: "https://via.placeholder.com/300x400?text=Poster+7"
    },
    {
      title: "Poster 8",
      desc: "Nature and design in architectural spaces.",
      image: "https://via.placeholder.com/300x400?text=Poster+8"
    },
    {
      title: "Poster 9",
      desc: "Blockchain's impact on the financial world.",
      image: "https://via.placeholder.com/300x400?text=Poster+9"
    },
    {
      title: "Poster 10",
      desc: "The role of big data in modern decision making.",
      image: "https://via.placeholder.com/300x400?text=Poster+10"
    },
    {
      title: "Poster 11",
      desc: "Art, code, and creative technology.",
      image: "https://via.placeholder.com/300x400?text=Poster+11"
    },
    {
      title: "Poster 12",
      desc: "Climate resilience through innovation.",
      image: "https://via.placeholder.com/300x400?text=Poster+12"
    },
    {
      title: "Poster 13",
      desc: "Cybersecurity in the age of data.",
      image: "https://via.placeholder.com/300x400?text=Poster+13"
    },
    {
      title: "Poster 14",
      desc: "Redefining mobility with electric vehicles.",
      image: "https://via.placeholder.com/300x400?text=Poster+14"
    },
    {
      title: "Poster 15",
      desc: "Exploring space through human imagination.",
      image: "https://via.placeholder.com/300x400?text=Poster+15"
    }
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
              <ProfileHighlights />
              <Projects />
              <TechTip />
              <PosterShowcase posters={posters} />
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
                  <PosterShowcase posters={posters} />
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
