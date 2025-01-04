
import React from "react";
function AdminSidebar() {

   
      return (
        <div className="h-screen bg-gray-800 text-white flex flex-col">
          {/* Sidebar Header */}
          <div className="px-4 py-5 text-lg font-bold border-b border-gray-700">
            My Sidebar
          </div>
    
          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-2">
            <ul className="space-y-2">
              <li>
                <a
                  href="#dashboard"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  <span className="material-icons">dashboard</span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  <span className="material-icons">person</span>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#settings"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  <span className="material-icons">settings</span>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a
                  href="/auth/login"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  <span className="material-icons">logout</span>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
    
          {/* Sidebar Footer */}
          <div className="px-4 py-3 border-t border-gray-700 text-sm">
            © 2025 My Website
          </div>
        </div>
      );
    }
    
   
   

export default AdminSidebar;