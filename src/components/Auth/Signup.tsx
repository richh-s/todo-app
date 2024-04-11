import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-[400px] rounded p-8 shadow-md">
        <h2 className="text-center m-2 text-2xl font-semibold text-[#633bbb]">Sign Up</h2>
        <form >
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full border-2 border-gray-400 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50 bg-white text-gray-800 placeholder-gray-400 px-3 py-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full border-2 border-gray-400 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50 bg-white text-gray-800 placeholder-gray-400 px-3 py-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="block w-full border-2 border-gray-400 rounded-md shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50 bg-white text-gray-800 placeholder-gray-400 px-3 py-1"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 mb-4"
          >
            Sign Up
          </button>
          <div className="flex flex-col items-center mb-4">
            <button
              type="button"
              className="flex items-center justify-center bg-transparent text-blue-600 font-semibold py-2 px-4 rounded-md border border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 focus:text-white mb-2 w-full"
            >
              <FaFacebook className="mr-2" />
              Sign up with Facebook
            </button>
            <button
              type="button"
              className="flex items-center justify-center bg-transparent text-red-600 font-semibold py-2 px-4 rounded-md border border-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:bg-red-600 focus:text-white w-full"
            >
              <FaGoogle className="mr-2" />
              Sign up with Google
            </button>
          </div>
          <p className="text-center text-gray-700 mb-4">
            Already have an account? <Link to="/" className="text-purple-600">Back to login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
