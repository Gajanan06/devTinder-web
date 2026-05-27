import axios from "axios";

import { BASE_URL } from "../utils/constants";

const RequestCard = ({ request }) => {

  const { fromUserId } = request;

  const handleReviewRequest = async (status) => {

    try {

      await axios.post(
        `${BASE_URL}/request/review/${status}/${request._id}`,
        {},
        {
          withCredentials: true,
        }
      );

      window.location.reload();

    } catch (err) {

      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        <img
          src={fromUserId.profile}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>

          <h2 className="text-xl font-semibold text-gray-800">
            {fromUserId.firstName} {fromUserId.lastName}
          </h2>

          <p className="text-gray-600">
            {fromUserId.age}, {fromUserId.gender}
          </p>

        </div>
      </div>

      {/* Right */}
      <div className="flex gap-3">

        <button
          onClick={() =>
            handleReviewRequest("rejected")
          }
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Reject
        </button>

        <button
          onClick={() =>
            handleReviewRequest("accepted")
          }
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Accept
        </button>

      </div>
    </div>
  );
};

export default RequestCard;