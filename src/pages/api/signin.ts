import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from "@/src/lib/dbConnect";
import User from "@/models/users";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { email, password } = req.body;

        // Validate that both fields are provided
        if (!email || !password) {
            return res.status(400).json({ error: "Please provide email and password." });
        }

        await dbConnect(); // Ensure database is connected

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        // Compare the hashed password with the provided password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        // Successfully authenticated
        return res.status(200).json({ message: "Sign-in successful", role: user.role });

    } catch (error) {
        console.error("Error during sign-in:", error);
        return res.status(500).json({ error: "An error occurred during sign-in." });
    }
}