const ConnectionCard = ({ connection }) => {

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4">

      <img
        src={connection.profile}
        alt="Profile"
        className="w-20 h-20 rounded-full object-cover"
      />

      <div>

        <h2 className="text-2xl font-semibold text-gray-800">
          {connection.firstName} {connection.lastName}
        </h2>

        {(connection.age || connection.gender) && (
         <p className="text-gray-600 mt-1">
           {connection.age && `${connection.age}`}
           {connection.age && connection.gender && ", "}
           {connection.gender && connection.gender}
         </p>
        )}

      </div>
    </div>
  );
};

export default ConnectionCard;