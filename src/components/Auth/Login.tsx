import React, { useState } from "react";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Signup from '../Auth/Signup'
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithFacebook = () => {
    // Implement sign-in with Facebook logic
  };

  const handleSignInWithGoogle = () => {
    // Implement sign-in with Google logic
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-[400px] rounded p-8 shadow-md">
        <h2 className="text-center m-2 text-2xl font-semibold text-[#633bbb]">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Your Email"
              className="block w-full border-2 border-gray-400 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50 bg-white text-gray-800 placeholder-gray-400 px-3 py-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              className="block w-full border-2 border-gray-400 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50 bg-white text-gray-800 placeholder-gray-400 px-3 py-1"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 my-4"
          >
            Login
          </button>
          <div className="flex flex-col mb-2">
  <button
    type="button"
    onClick={handleSignInWithFacebook}
    className="flex items-center justify-center bg-transparent text-blue-500 font-semibold py-2 px-4 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white"
  >
    <FaFacebook className="mr-2" />
    Sign in with Facebook
  </button>
</div>
<div className="flex flex-col">
  <button
    type="button"
    onClick={handleSignInWithGoogle}
    className="flex items-center justify-center bg-transparent text-red-500 font-semibold py-2 px-4 rounded-md border border-red-500 hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-600 focus:text-white"
  >
    <FaGoogle className="mr-2" />
    Sign in with Google
  </button>
</div>

          <p className="text-center text-gray-700 m-4">
            Don't have an account? <Link to="/Signup" className="text-purple-600">Sign up</Link>
          </p>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
