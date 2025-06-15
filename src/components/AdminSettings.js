// src/components/AdminSettings.js
import React from 'react';

function AdminSettings() {
  return (
    <div className="container my-5">
      <h2>Admin Profile / Settings</h2>
      <p>Manage your profile and portfolio site settings here.</p>
      {/* Add form elements or controls as needed */}
      <div className="my-3">
        <label>Change Password</label>
        <input type="password" className="form-control mb-2" placeholder="New Password" />
        <button className="btn btn-dark">Update</button>
      </div>
    </div>
  );
}

export default AdminSettings;
