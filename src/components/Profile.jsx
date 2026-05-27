import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((store) => store.user);

  if (!user) {
    return (
      <div className="flex justify-center mt-10">
        <p className="text-gray-600 text-lg">
          Loading profile...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">

        {/* Top Section */}
        <div className="bg-orange-500 h-32"></div>

        {/* Profile Content */}
        <div className="px-6 pb-8">

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={user.profile}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover -mt-16 shadow-md"
            />
          </div>

          {/* Name */}
          <div className="text-center mt-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {user.firstName} {user.lastName}
            </h2>

            <p className="text-gray-500 mt-1">
              {user.emailID}
            </p>
          </div>

          {/* User Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-gray-500 text-sm">
                Age
              </h3>

              <p className="text-lg font-medium text-gray-800 mt-1">
                {user.age || "Not Added"}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-gray-500 text-sm">
                Gender
              </h3>

              <p className="text-lg font-medium text-gray-800 mt-1">
                {user.gender || "Not Added"}
              </p>
            </div>

          </div>

          {/* Button */}
          <Link to="/profile/edit" className="mt-8 flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition duration-200">
              Edit Profile
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Profile;