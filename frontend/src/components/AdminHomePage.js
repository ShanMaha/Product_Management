import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold">Admin Dashboard</h1>
          <div className="space-x-4">
            <Link to="/login" className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200">
              Login
            </Link>
            <Link to="/signup" className="bg-gray-200 text-blue-600 py-2 px-4 rounded hover:bg-gray-300">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-gray-800 text-white flex flex-col">
          <nav className="flex-1 px-2 py-4">
            <ul className="space-y-2">
              <li>
                <Link to="/admin/dashboard" className="block px-4 py-2 rounded hover:bg-gray-700">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/add" className="block px-4 py-2 rounded hover:bg-gray-700">
                  Add Opticals
                </Link>
              </li>
              <li>
                <Link to="/opticals" className="block px-4 py-2 rounded hover:bg-gray-700">
                  Edit Items
                </Link>
              </li>
              <li>
                <Link to="/setting" className="block px-4 py-2 rounded hover:bg-gray-700">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/list" className="block px-4 py-2 rounded hover:bg-gray-700">
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/login" className="block px-4 py-2 rounded hover:bg-gray-700">
                  Log Out
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, Admin!</h2>
            <p className="text-gray-600 mb-6">
              Use the navigation menu on the left to access different sections of the admin dashboard.
            </p>

            {/* Example Grid for Dashboard Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-700">Users</h3>
                <p className="text-3xl font-bold text-blue-600">120</p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-700">Revenue</h3>
                <p className="text-3xl font-bold text-green-600">$5,000</p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-700">Reports</h3>
                <p className="text-3xl font-bold text-red-600">25</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
