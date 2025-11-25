"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { data: session } = useSession();

  // Login Logic
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: "/dashboard",
    });
  };

  /*
  setTimeout(() => {
    
  }, 1);
  */

  if (session) {
    redirect("/dashboard");
  } else {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        {/* Login Card Container */}
        <div className="w-full max-w-sm bg-gray-800 p-8 rounded-xl shadow-2xl shadow-cyan-500/50">
          <h1 className="text-3xl font-extrabold text-white mb-2 text-center">
            <span className="text-cyan-400">Login</span>
          </h1>
          {/* Form Login Start */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email / Username
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                placeholder="e.g., alex.johnson@club.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
                placeholder="••••••••"
              />
            </div>

            {/* Submission Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-lg font-semibold shadow-md transition duration-200 ${
                loading
                  ? "bg-cyan-600 cursor-not-allowed opacity-75"
                  : "bg-cyan-500 hover:bg-cyan-600 text-white shadow-cyan-500/40 hover:shadow-cyan-400/50 hover:cursor-pointer"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Logging In...
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Message / Status Area */}
          {message && (
            <div
              className={`mt-4 p-3 rounded-lg text-center ${
                message.includes("Success")
                  ? "bg-green-600/30 text-green-300 border border-green-500"
                  : "bg-red-600/30 text-red-300 border border-red-500"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default LoginPage;
