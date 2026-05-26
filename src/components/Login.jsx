import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailID, setEmailId] = useState("akshay@gmail.com");
  const [password, setPassword] = useState("Akshay@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      `${BASE_URL}/login`,
      {
        emailID,
        password,
      },
       {
        withCredentials: true,
      }
    );

    // console.log(res.data);
    dispatch(addUser(res.data));
    navigate("/feed");
  } catch (err) {
    setError("Invalid email or password");
    console.log(err);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          
          <div>
            <label className="block text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={emailID}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>

          <p className="text-red-500 text-sm">
            {error}
            </p>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          New here?{" "}
          <span className="text-orange-500 cursor-pointer hover:underline"
          onClick={() => navigate("/signup")}>
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;