// import { dbConnect } from '@/lib/dbConnect';
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;
// if (!MONGODB_URI) {
  
// }

// const dbConnect = async () =>{
//   try {
//     await mongoose.connect(MONGODB_URI);
//   } catch (error) {
    
//   }
// }


//WORKS FINE!!

// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
// }

// const dbConnect = async () => {
//   try {
//     await mongoose.connect(MONGODB_URI);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw new Error("Failed to connect to MongoDB");
//   }
// };

// export default dbConnect;


import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/src/lib/dbConnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests (or whatever methods you need)
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await dbConnect(); // Attempt to connect to MongoDB
    return res.status(200).json({ message: 'Connected to MongoDB' }); // Send response
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ error: 'Failed to connect to MongoDB' });
  }
}

