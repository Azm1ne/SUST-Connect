import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <div className="flex w-full max-w-6xl items-center justify-between px-8">
        {/* Left Side - Text Section */}
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold text-gray-800">SUST Connect</h1>
          <p className="text-sm text-yellow-600 mt-4">⭐⭐⭐⭐⭐ Used by 12k+ SUSTians</p>
          <h2 className="text-4xl font-bold mt-6 text-gray-900 leading-snug">
            More than just news <br /> truly connect
          </h2>
          <p className="mt-4 text-gray-700">
            Connect with the SUSTian community on SUST Connect.
          </p>
        </div>

        {/* Right Side - Login Card */}
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
          <h3 className="text-xl font-semibold text-center text-gray-800">
            Sign in to
          </h3>
          <p className="text-sm text-center text-gray-500 mb-6">
            Welcome back! Please sign in to continue
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg font-medium mt-4"
            >
              Continue →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
