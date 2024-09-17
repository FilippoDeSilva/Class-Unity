// src/types/global.d.ts
import mongoose from "mongoose";

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: mongoose.Connection | null;  // Explicitly type the connection
        promise: Promise<mongoose.Connection> | null;  // Explicitly type the promise
      };
    }
  }
}
