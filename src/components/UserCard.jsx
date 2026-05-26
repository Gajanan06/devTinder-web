import axios from "axios";
import { useDispatch } from "react-redux";

import {
  removeUserFromFeed,
} from "../utils/feedSlice";

import { BASE_URL } from "../utils/constants";

const UserCard = ({ user }) => {

  const dispatch = useDispatch();

  const handleFeedAction = async (status, userId) => {

    try {

      await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        {
          withCredentials: true,
        }
      );

      dispatch(removeUserFromFeed(userId));

    } catch (err) {
      console.log(err);
    }
  };
  console.log(user);

  return (
    <div className="bg-white w-80 rounded-2xl shadow-lg overflow-hidden">

      {/* Profile Image */}
      <img
        src={user.profile || "https://via.placeholder.com/300x400"}
        alt="Profile"
        className="w-full h-80 object-cover"
      />

      {/* User Details */}
      <div className="p-4">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-gray-800">
            {user.firstName} {user.lastName}
          </h2>

          <p className="text-gray-500 font-medium">
            {user.age}
          </p>

        </div>

        <p className="text-gray-600 mt-1">
          {user.gender}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">

          <button
            onClick={() =>
              handleFeedAction("ignored", user._id)
            }
            className="flex-1 bg-gray-100 hover:bg-red-500 hover:text-white text-gray-700 py-2 rounded-lg transition duration-200"
          >
            Ignore
          </button>

          <button
            onClick={() =>
              handleFeedAction("interested", user._id)
            }
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-200"
          >
            Interested
          </button>

        </div>
      </div>
    </div>
  );
};

export default UserCard;