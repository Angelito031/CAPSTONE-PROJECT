import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../store/store";

const Register = () => {
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    await login(credentials);
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="h-screen w-screen py-16">
      <div className="mx-auto flex max-w-sm overflow-hidden rounded-lg bg-white shadow-lg lg:max-w-4xl">
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-center text-2xl font-semibold uppercase text-gray-700">
            Register Form
          </h2>
          <div className="mt-4 flex items-center justify-between">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <p className="text-center text-xs uppercase text-gray-500">
              Register with your credentials
            </p>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Username
            </label>
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none"
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Username"
            />
          </div>
          <div className="mt-4">
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </div>
          <div className="mt-8">
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full rounded bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <Link to="/login" className="text-xs uppercase text-gray-500">
              Already have an account?{" "}
              <span className="text-blue-400 underline">Login</span>
            </Link>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
