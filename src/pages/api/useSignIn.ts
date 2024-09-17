import { useState } from "react";
import { useRouter } from "next/navigation"; // For redirection
import { z } from "zod";
import Cookies from "js-cookie";

// Zod schema for validation
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const useSignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Validate inputs using Zod
    const result = signInSchema.safeParse({ email, password });
    if (!result.success) {
      const formattedErrors = result.error.format();
      setError(
        formattedErrors.email?._errors[0] ||
        formattedErrors.password?._errors[0] ||
        "Invalid input"
      );
      return;
    }
  
    setError("");
    setSuccess("");
  
    try {
      // Make API call to sign in
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        setError(data.error || "Invalid email or password");
        return;
      }
  
      setSuccess("Sign in successful!");
  
      // Store JWT token in a cookie
      Cookies.set("token", data.token, { expires: 7 }); // Expires in 7 days
  
      // Check the user's role and redirect accordingly
      if (data.role === "supervisor") {
        router.push("/admin");
      } else if (data.role === "instructor") {
        router.push("/Instructor");
      } else if (data.role === "student") {
        router.push("/Student");
      } else {
        setError("User role not recognized.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during sign-in.");
    }
  };

  return { email, setEmail, password, setPassword, handleSubmit, error, success };
};

export default useSignIn;
