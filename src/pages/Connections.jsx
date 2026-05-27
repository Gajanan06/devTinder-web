import { useEffect, useState } from "react";
import axios from "axios";
import ConnectionCard from "../components/ConnectionCard";
import { BASE_URL } from "../utils/constants";


const Connections = () => {
  const [connections, setConnections] = useState([]);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/user/connections`,
        {
          withCredentials: true,
        }
      );

      setConnections(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (connections.length === 0) {
    return (
      <div className="flex justify-center mt-10">

        <h1 className="text-2xl text-gray-600">
          No Connections Found
        </h1>

      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Your Connections
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {connections.map((connection) => (

          <ConnectionCard
            key={connection._id}
            connection={connection}
          />
        ))}

      </div>
    </div>
  );
};

export default Connections;