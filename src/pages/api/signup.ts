import type { NextApiRequest, NextApiResponse } from 'next'; // Import types
import dbConnect from "@/src/lib/dbConnect";
import User from "@/models/users";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) { // Add types here
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, password, role, age, gender, department, courses, grades, startyear, classschedules, announcements, events, message, complain } = req.body;

    // Validate that all required fields are provided
    if (!name || !email || !password || !role) {
      console.error("Missing required fields:", { name, email, password, role });
      return res.status(400).json({ error: "Please provide all required fields." });
    }

    await dbConnect(); // Ensure database is connected

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.error("User already exists with email:", email);
      return res.status(409).json({ error: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user and save it
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      age,
      gender,
      department,
      courses,
      grades,
      startyear,
      classschedules,
      announcements,
      events,
      message,
      complain
    });

    await newUser.save();

    console.log("New user registered:", newUser);
    return res.status(201).json({ message: "User registered successfully", user: newUser });

  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).json({ error: "An error occurred during registration." });
  }
}
