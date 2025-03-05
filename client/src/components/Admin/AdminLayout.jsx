import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSideBar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Toggle Button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-30">
        <button onClick={toggleSideBar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>
      {/* Overlay for mobile-sidebar 📱 */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
          onClick={toggleSideBar}></div>
      )}
      {/* SideBar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white fixed md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } transition-transform duration-300 ease-in-out z-30`}>
        <AdminSidebar />
      </div>
      {/* Main Content */}
      <div className="flex-grow p-6 overflow-auto z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
