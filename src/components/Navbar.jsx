import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
    const user = useSelector((store) => store.user);
    // console.log(user);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">
          devTinder
        </h1>

        {/* Right Section */}
        {user && (
          <div className=" flex relative items-center gap-4">
            <p className="text-gray-700 font-medium">Welcome, {user.firstName} </p>
            
            {/* Profile Button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-3xl text-gray-700 hover:text-black transition"

          >
            {/* <FaUserCircle /> */}
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
                <img src={user.profile || "https://via.placeholder.com/150"} alt="Profile" className="w-full h-full cursor-pointer rounded-full object-cover" />
            </div>
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 top-12 w-40 bg-white rounded-lg shadow-lg border">
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
        )}

      </div>
    </nav>
  );
};

export default Navbar;