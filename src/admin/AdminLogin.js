import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('43210');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Normally you'd validate the username/password here
    setTimeout(() => {
      // Save login state & user info
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('adminName', 'Kabila Mboya');
      localStorage.setItem('adminAvatar', 'https://i.pravatar.cc/150?img=11');

      // Notify App and navigate to dashboard
      onLogin(username.trim(), password.trim());
      navigate('/dashboard');
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section className="min-vh-100 d-flex flex-column">
      <div className="container flex-grow-1 d-flex flex-column flex-lg-row align-items-center justify-content-center py-5">
        {/* IMAGE COLUMN */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Login illustration"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* FORM COLUMN */}
        <div className="col-lg-6">
          <div className="bg-white rounded-4 p-4 shadow">
            <h2 className="text-center mb-4 text-primary">Welcome Back, Admin</h2>

            {/* Social Sign-In */}
            <div className="d-flex justify-content-center gap-3 mb-3">
              <p className="fw-medium mb-0">Sign in with</p>
              {['facebook', 'twitter', 'linkedin'].map((net) => (
                <button
                  key={net}
                  type="button"
                  className="btn btn-outline-primary btn-sm rounded-circle"
                >
                  <i className={`fab fa-${net}`}></i>
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">Or</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="you@example.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="button" className="btn btn-link text-decoration-none fw-bold text-warning p-0">Forgot password?</button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-100 py-2 ${isSubmitting ? 'disabled' : ''}`}
              >
                {isSubmitting ? 'Logging in…' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-primary text-white text-center py-3 mt-auto">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span>© 2025 Your Company. All rights reserved.</span>
          <div className="mt-2 mt-md-0">
            {['facebook', 'twitter', 'google', 'linkedin'].map((net) => (
              <button key={net} type="button" className="btn btn-link text-white me-3 p-0">
                <i className={`fab fa-${net}`}></i>
              </button>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default AdminLogin;
