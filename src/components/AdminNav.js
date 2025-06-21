import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function AdminNav({ onUploadClick, notifications = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [admin, setAdmin] = useState({ name: "", avatar: "" });

  const navigate = useNavigate();

  useEffect(() => {
    const stored = {
      name: localStorage.getItem("adminName") || "Admin",
      avatar: localStorage.getItem("adminAvatar") || "https://i.pravatar.cc/150?img=12",
    };
    setAdmin(stored);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminName");
    localStorage.removeItem("adminAvatar");
    navigate("/admin");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-white shadow mb-6">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={toggleMenu}>
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Admin Portal</h1>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          {onUploadClick && (
            <button
              onClick={onUploadClick}
              className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
            >
              Upload
            </button>
          )}

          {/* Notifications */}
          <div className="relative">
            <BellIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                {notifications.length}
              </span>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative group">
            <img
              src={admin.avatar}
              alt={admin.name}
              className="w-10 h-10 rounded-full border cursor-pointer"
            />
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div className="px-4 py-2 text-sm text-gray-800 font-semibold border-b">
                {admin.name}
              </div>
              <button
                onClick={() => navigate("/settings")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Account Settings
              </button>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="flex justify-end p-3">
            <button onClick={toggleMenu}>
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="flex flex-col gap-3 px-6 pb-6">
            <button
              onClick={onUploadClick}
              className="bg-blue-500 text-white px-3 py-2 rounded"
            >
              Upload
            </button>
            <button
              onClick={() => {
                navigate("/settings");
                toggleMenu();
              }}
              className="text-gray-800 text-left"
            >
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="text-red-600 text-left"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
