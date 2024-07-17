import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../store/store";

const Register = () => {
  const { register} = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState("");
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    repassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleCheck = () => {
    if (credentials.firstname === "") {
      setIsEmpty("First name is Empty, Please fill up all credentials");
      return false;
    } else if (credentials.lastname === "") {
      setIsEmpty("Last name is Empty, Please fill up all credentials");
      return false;
    } else if (credentials.email === "") {
      setIsEmpty("Email is Empty, Please fill up all credentials");
      return false;
    } else if (credentials.password === "") {
      setIsEmpty("Password is Empty, Please fill up all credentials");
      return false;
    } else if (credentials.password !== credentials.repassword) {
      setIsEmpty("Password does not match");
      return false;
    } else {
      return true;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (handleCheck()) {
      await register(credentials);
      navigate("/login");
    }
    setTimeout(() => {
      setIsEmpty("");
    }, 5000);
    setIsLoading(false);
  };

  return (
    <div className="h-screen w-screen py-10">
      <div className="mx-auto flex max-w-sm flex-col overflow-hidden rounded-lg bg-white p-5 shadow-lg lg:max-w-4xl">
        <h2 className="text-center text-2xl font-semibold uppercase text-gray-700">
          Student Registration Form
        </h2>
        <div className="mt-4 flex items-center justify-between">
          <span className="w-1/2 border-b border-slate-300 lg:w-1/4"></span>
          <p className="text-center text-xs uppercase text-gray-500">
            Register with your credentials
          </p>
          <span className="w-1/2 border-b border-slate-300 lg:w-1/4"></span>
        </div>
        <form action="post" onSubmit={handleRegister}>
          <div className="mt-4">
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none"
              type="text"
              name="firstname"
              value={credentials.firstname}
              onChange={handleInputChange}
              placeholder="Enter your Firstname"
            />
          </div>
          <div className="mt-4">
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none"
              type="text"
              name="lastname"
              value={credentials.lastname}
              onChange={handleInputChange}
              placeholder="Enter your Lastname"
            />
          </div>
          <div className="mt-4">
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none"
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
            />
          </div>
          <div className="mt-4">
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter your Password"
            />
          </div>
          <div className="mt-4">
            <input
              className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none"
              type="password"
              name="repassword"
              value={credentials.repassword}
              onChange={handleInputChange}
              placeholder="Re-enter your Password"
            />
          </div>
          <div className="mt-8">
            <button
              disabled={isLoading}
              className="w-full rounded bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        <div
          className={
            isEmpty
              ? "my-3 h-fit w-full animate-pulse rounded bg-red-500 p-1 text-center"
              : "hidden"
          }
        >
          <p>{isEmpty}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="w-1/2 border-b border-slate-300 md:w-1/4"></span>
          <Link
            to="/login"
            className="text-center text-xs uppercase text-gray-500"
          >
            Already have an account?{" "}
            <span className="text-blue-400 underline">Login</span>
          </Link>
          <span className="w-1/2 border-b border-slate-300 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
