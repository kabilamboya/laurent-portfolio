import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
  e.preventDefault();
  onLogin(username.trim(), password.trim()); // send both inputs to App
};

  return (
    <div className="container mt-5">
      <h3>Admin Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Username</label>
          <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
