import { useState } from "react";
import { useAuthStore, useLoadingStore } from "../store/store";
import univImage from "../assets/univ.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuthStore();
  const { isLoading } = useLoadingStore();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    await login(credentials);
  };

  return (
    <div className="h-screen w-screen py-16">
      <div className="mx-auto flex max-w-sm overflow-hidden rounded-lg bg-white shadow-lg lg:max-w-4xl">
        <img
          src={univImage}
          alt="Universidad De Manila"
          className="size-cover hidden lg:block lg:w-1/2"
        />
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-center text-2xl font-semibold uppercase text-gray-700">
            Universidad De Manila
          </h2>
          <p className="text-center text-xl text-gray-600">
            On-The-Job Training{" "}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <p className="text-center text-xs uppercase text-gray-500">
              login with username
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
            <div className="flex justify-between">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Password
              </label>
              <Link to="/forgot" className="text-xs text-gray-500">
                Forget Password?
              </Link>
            </div>
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
              {isLoading ? "Login..." : "Login"}
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <Link to="/register" className="text-xs uppercase text-gray-500">
              or <span className="text-blue-400 underline">sign up</span>
            </Link>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
