// import mongoose, { Schema } from "mongoose";

// // Define the users schema
// const usersSchema = new Schema({
//   email: { type: String, required: true, unique: true }, // Ensures email is unique
//   password: { type: String, required: true }, // Ensures password is required
// });

// // Connect to MongoDB if not already connected
// if (!mongoose.connection.readyState) {
//   mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }

// // Define the model, using a capital "U" for consistency
// const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);

// export default Students;



//Works best

// // models/User.js
// import mongoose, { Schema } from "mongoose";

// // Define the user schema
// const userSchema = new Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   name: { type: String, required: true },
//   age: { type: Number, required: false },
//   gender: { type: String, required: false },
//   department: { type: String, required: false },
//   courses: { type: String, required: false },
//   grades: { type: String, required: false },
//   startyear: { type: String, required: false },
//   classschedules: { type: String, required: false },
//   announcements: { type: String, required: false },
//   events: { type: String, required: false },
//   message: { type: String, required: false },
//   complain: { type: String, required: false },
//   role: {
//     type: String,
//     enum: ['student', 'instructor', 'supervisor'],
//     default: 'student',
//     required: true,
//   },
// });

// // Define the model
// const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

// export default Users;

import mongoose, { Schema } from "mongoose";

// Define the user schema
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: {
        type: String,
        enum: ['student', 'instructor', 'supervisor'],
        default: 'student',
        required: true,
    },
    // Other fields as necessary...
});

// Connect to MongoDB if not already connected
if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

// Define the model
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
