import { Link } from "react-router-dom";

function AdminHeader() {
    return <header className="bg-gray-800 text-white">
    <div className="flex items-center justify-between px-6 py-4">
      {/* Brand Logo */}
      <div className="text-lg font-bold">
        <a href="/" className="hover:text-gray-400">
          DigiWallet
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="/user/home" className="hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="/user/transaction" className="hover:text-gray-400">
          My transaction
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </nav>

      {/* Profile Dropdown */}
      <div className="relative"> 
      <Link to="/admin/dashboard">
      <button
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none"
      >
       
        Admin Dashboard
      </button>
    </Link>
          
      
        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-md hidden group-hover:block">
          <a
            href="#profile"
            className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg"
          >
            Profile
          </a>
          <a
            href="#settings"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Settings
          </a>
          <a
            href="#logout"
            className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg"
          >
            Logout
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden flex items-center">
        <span className="material-icons">menu</span>
      </button>
    </div>
  </header>
;
}


export default AdminHeader;