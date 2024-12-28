import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminHome = () => {
  // Simulating dynamic data from backend
  const [userData, setUserData] = useState({ users: 120, revenue: 5000, reports: 25 });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Example dynamic data for graphs
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1000, 2000, 3000, 4000, 5000, 6000],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1
      },
      {
        label: "Users",
        data: [50, 70, 90, 110, 130, 150],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.1
      }
    ]
  };

  // Simulate fetching dynamic data
  useEffect(() => {
    // Mock dynamic data update logic (simulate API call)
    setInterval(() => {
      setUserData((prevData) => ({
        users: prevData.users + 10,
        revenue: prevData.revenue + 500,
        reports: prevData.reports + 1,
      }));
    }, 5000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold">Admin Dashboard</h1>
          
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-gray-200 text-white flex flex-col">
          <nav className="flex-1 px-2 py-4">
            <ul className="space-y-2">
              <li>
                <Link to="/admin" className="block px-4 py-2 rounded hover:bg-blue-500">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/add" className="block px-4 py-2 rounded hover:bg-blue-500">
                  Add Opticals
                </Link>
              </li>
              <li>
                <Link to="/opticals" className="block px-4 py-2 rounded hover:bg-blue-500">
                  Edit Items
                </Link>
              </li>
              <li>
                <Link to="/setting" className="block px-4 py-2 rounded hover:bg-blue-500">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/list" className="block px-4 py-2 rounded hover:bg-blue-500">
                  Reports
                </Link>
              </li>
              <li>
              <li>
                <Link to="/login" className="block px-4 py-2 rounded hover:bg-blue-500">
                  Log Out
                </Link>
              </li>
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

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-700">Users</h3>
                <p className="text-3xl font-bold text-blue-600">{userData.users}</p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-700">Revenue</h3>
                <p className="text-3xl font-bold text-green-600">${userData.revenue}</p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-700">Reports</h3>
                <p className="text-3xl font-bold text-red-600">{userData.reports}</p>
              </div>
            </div>

            {/* Graphs */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Revenue and Users Over Time</h3>
              <Line data={data} options={{ responsive: true }} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
