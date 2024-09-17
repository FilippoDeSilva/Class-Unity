// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if(!MONGODB_URI){
//   throw new Error("MONGODB_URI is not defined");
// }

// const connectMongoDB = () => {
//   try {
//     mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connected!")
//   } catch (error) {
//       console.log(error);
//   }
// }

// export default connectMongoDB;






//src/lib/connectMongoDB.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; // Fetch from environment variables

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI); // Remove the options
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongoDB;












// import mongoose from 'mongoose';

// const dbConnect = async () => {
//   // if (mongoose.connection.readyState >= 1) {
//   //   return;
//   // }

//   const MONGODB_URI = process.env.MONGODB_URI; // Fetch from environment variables

// if (!MONGODB_URI) {
//   throw new Error("MONGODB_URI is not defined");
// }

//   try {
//     await mongoose.connect(MONGODB_URI);
//     console.log('MongoDB connected successfully.');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//   }
// };

// export default dbConnect;











