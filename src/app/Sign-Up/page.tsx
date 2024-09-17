"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "@/src/components/Loading";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [showAlert, setShowAlert] = useState(false); // State for alert visibility
  const router = useRouter();

  const handleButtonClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission refresh
    setError(null);
    setSuccess(null);
    setLoading(true); // Start loading

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "An error occurred during sign-up");
        setLoading(false);
        setShowAlert(true); // Show alert on error
        return;
      }

      setSuccess("Sign-up successful! Redirecting...");
      setShowAlert(true); // Show alert on success
      
      // Store token and redirect
      localStorage.setItem("authToken", data.token);
      
      setTimeout(() => {
        setLoading(false);
        router.push(`/Student?auth=verified`);
      }, 2000);
    } catch (err) {
      setError("An error occurred during sign-up");
      setLoading(false);
      setShowAlert(true); // Show alert on catch error
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false); // Close the alert
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className={`relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md ${showAlert ? "blur-sm" : ""}`}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg z-10">
            <Loading />
          </div>
        )}
        <div className="flex items-center justify-center mb-6">
          <Image src="/cpu-logo.jpg" alt="logo" width={100} height={100} className="rounded-full" priority />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-8">Class Unity</h1>

        <form onSubmit={handleButtonClick}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

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

          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-600">Are you...</label>
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
              <option value="supervisor">Supervisor</option>
            </select>
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

          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200" disabled={loading}>
            Sign Up
          </button>

          <p className="mt-6 text-center text-gray-500">
            Have an account? 
            <a href="/Sign-In" className="pl-4 text-blue-500 hover:underline">Sign In</a>
          </p>
        </form>
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
            ) : success ? (
              <>
                <p className="text-green-500">{success}</p>
                <button
                  onClick={handleCloseAlert}
                  className="mt-4 py-1 px-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  OK
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
