import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailID, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = async (e) => {

    e.preventDefault();
    try {
      if (isLoginForm) {

        
        await axios.post(`${BASE_URL}/login`,
         {
           emailID,
         password,
      },
      {
        withCredentials: true,
     }
    );

const userRes = await axios.get(`${BASE_URL}/profile/view`,
   {
    withCredentials: true,
   }
  );

  dispatch(addUser(userRes.data));
  navigate("/feed");

      } else {


        await axios.post(
          `${BASE_URL}/signup`,
          {
            firstName,
            lastName,
            emailID,
            password,
          },
          {
            withCredentials: true,
          }
        );

        setIsLoginForm(true);
        setError("");

        alert("Account created successfully");
      }

    } catch (err) {
      setError(err.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        <div className="text-center mb-6">

          <h1 className="text-4xl font-bold text-orange-500">
            devTinder
          </h1>

          <p className="text-gray-500 mt-2">

            {isLoginForm
              ? "Login to your account"
              : "Create your account"}

          </p>

        </div>

        <form
          onSubmit={handleAuth}
          className="space-y-5"
        >

          {!isLoginForm && (
            <>
              <div>

                <label className="block text-gray-700 mb-2">
                  First Name
                </label>

                <input
                  type="text"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(e.target.value)
                  }
                  placeholder="Enter first name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-orange-500"
                />
              </div>

              <div>

                <label className="block text-gray-700 mb-2">
                  Last Name
                </label>

                <input
                  type="text"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(e.target.value)
                  }
                  placeholder="Enter last name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-orange-500"
                />
              </div>
            </>
          )}

          <div>

            <label className="block text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              value={emailID}
              onChange={(e) =>
                setEmailId(e.target.value)
              }
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>

          <div>

            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-orange-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white py-2 rounded-lg transition duration-200"
          >

            {isLoginForm
              ? "Login"
              : "Create Account"}

          </button>

        </form>


        <div className="text-center pb-2 h-16 flex items-center justify-center">

          {isLoginForm ? (

          <p className="text-gray-600 text-sm">
           New here?

        <button
          type="button"
          onClick={() => {
          setIsLoginForm(false);
          setError("");
        }}
        className="text-orange-500 ml-1 hover:underline cursor-pointer font-medium">
        Create Account
      </button>

    </p>

  ) : (

    <p className="text-gray-600 text-sm">

      Already have an account?

      <button
        type="button"
        onClick={() => {
          setIsLoginForm(true);
          setError("");
        }}
        className="text-orange-500 ml-1 hover:underline cursor-pointer font-medium"
      >
        Login
      </button>

    </p>

    )}

    </div>
      </div>
    </div>
  );
};

export default Login;