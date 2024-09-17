"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useSignIn from "@/src/pages/api/useSignIn"; // Adjust the path as needed
import Loading from "@/src/components/Loading"; // Adjust the path to your Loading component

const SignIn: React.FC = () => {
  const { email, setEmail, password, setPassword, handleSubmit, error, success } = useSignIn();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading state

    // Call handleSubmit and pass the event object
    await handleSubmit(e);
    setLoading(false); // Reset loading state

    // Show alert if there's an error or success
    if (error || success) {
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Close the alert
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className={`relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md ${showAlert ? "blur-sm" : ""}`}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg z-10">
            <Loading />  {/* Render your Loading component */}
          </div>
        )}
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/cpu-logo.jpg"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-8">Class Unity</h1>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            disabled={loading} // Disable the button while loading
          >
            Sign In
          </button>
        </form>

        <h3 className="pt-6 text-center">
          Don&apos;t have an account?{' '}
          <Link href="/Sign-Up" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </h3>
      </div>
      {/* Alert Box */}
      {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h2 className="text-lg font-bold mb-2">{error ? "Error" : "Success"}</h2>
              {error ? (
                <>
                  <p className="text-red-500">{error}</p>
                  <button
                    onClick={handleCloseAlert}
                    className="mt-4 py-1 px-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    OK
                  </button>
                </>
              // ) : success ? (
              //   <>
              //     <p className="text-green-500">{success}</p>
              //     <button
              //       onClick={handleCloseAlert}
              //       className="mt-4 py-1 px-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
              //     >
              //       OK
              //     </button>
              //   </>
              ) : null}
            </div>
          </div>
        )}
    </div>
    
  );
};

export default SignIn;
