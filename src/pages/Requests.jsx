import { useEffect, useState } from "react";
import axios from "axios";

import RequestCard from "../components/RequestCard";

import { BASE_URL } from "../utils/constants";

const Requests = () => {

  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {

    try {

      const res = await axios.get(
        `${BASE_URL}/user/requests/received`,
        {
          withCredentials: true,
        }
      );

      setRequests(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (requests.length === 0) {
    return (
      <h1 className="text-center mt-10 text-2xl text-gray-600">
        No Connection Requests
      </h1>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Connection Requests
      </h1>

      <div className="space-y-4">

        {requests.map((request) => (

          <RequestCard
            key={request._id}
            request={request}
          />
        ))}

      </div>
    </div>
  );
};

export default Requests;