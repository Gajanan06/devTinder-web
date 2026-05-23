import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">
          devTinder
        </h1>

        {/* Right Section */}
        <div className="relative">
          
          {/* Profile Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl text-gray-700 hover:text-black transition"
          >
            <FaUserCircle />
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-3 w-40 bg-white rounded-lg shadow-lg border">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;