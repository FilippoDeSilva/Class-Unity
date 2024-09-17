// import { NextResponse } from "next/server";
// import Students from "../../../../models/users"; // Adjust the path as necessary
// import bcrypt from "bcryptjs/dist/bcrypt";

// // POST handler for creating a new user
// export async function POST(request) {
//   const { email, password, name, age, gender, department, courses, grades, startyear, classschedules, announcements, events, message, complain, userrole } = await request.json();

//   console.log("Received data:", { email, password, name, age, gender, department, courses, grades, startyear, classschedules, announcements, events, message, complain, userrole });

//   // Validate that all required fields are provided
//   if (!email || !password || !name || !age || !gender || !department || !courses || !grades || !startyear 
//       || !classschedules || !announcements || !events || !message || !complain || !userrole) {
//       return NextResponse.json({
//           message: "All fields are required."
//       }, { status: 400 });
//   }

//   try {
//     // Check if a user with the provided email already exists
//     const existingUser = await Students.findOne({ email });
//     if (existingUser) {
//         return NextResponse.json({
//             message: "Email already in use."
//         }, { status: 409 });
//     }

//     // Hash the password before storing it
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user with all provided fields
//     const newUser = await Students.create({ 
//         email, 
//         password: hashedPassword, 
//         name, 
//         age, 
//         gender, 
//         department, 
//         courses, 
//         grades, 
//         startyear, 
//         classschedules, 
//         announcements, 
//         events, 
//         message, 
//         complain, 
//         userrole 
//     });

//     console.log("User created:", newUser);

//     return NextResponse.json({
//         message: "User created successfully",
//         user: newUser
//     }, { status: 201 });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     return NextResponse.json({
//         message: "Failed to create user",
//         error: error.message // Log the error message for better debugging
//     }, { status: 500 });
//   }
// }

// // GET handler for retrieving all users
// export async function GET() {
//     try {
//         const users = await Students.find(); // Fetch all users
//         return NextResponse.json(users, { status: 200 });
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         return NextResponse.json({
//             message: "Failed to fetch users."
//         }, { status: 500 });
//     }
// }

// // DELETE handler for removing a user by ID
// export async function DELETE(request) {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get("id");

//     if (!id) {
//         return NextResponse.json({
//             message: "User ID is required."
//         }, { status: 400 });
//     }

//     try {
//         const deletedUser = await Students.findByIdAndDelete(id); // Delete the user by ID

//         if (!deletedUser) {
//             return NextResponse.json({
//                 message: "User not found."
//             }, { status: 404 });
//         }

//         return NextResponse.json({
//             message: "User deleted successfully."
//         }, { status: 200 });
//     } catch (error) {
//         console.error("Error deleting user:", error);
//         return NextResponse.json({
//             message: "Error deleting user."
//         }, { status: 500 });
//     }
// }

// // PUT handler for updating a user by ID
// export async function PUT(request) {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get("id");
//     const { email, password, name, age, gender, department, courses, grades, startyear, classschedules, announcements, events, message, complain, userrole } = await request.json();

//     // Validate that all required fields are provided
//     if (!id) {
//         return NextResponse.json({
//             message: "User ID is required."
//         }, { status: 400 });
//     }

//     if (!email || !password || !name || !age || !gender || !department || !courses || !grades || !startyear 
//         || !classschedules || !announcements || !events || !message || !complain || !userrole) {
//         return NextResponse.json({
//             message: "All fields are required."
//         }, { status: 400 });
//     }

//     try {
//         // Hash the password before updating it
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const updatedUser = await Students.findByIdAndUpdate(
//             id,
//             { 
//                 email, 
//                 password: hashedPassword, 
//                 name, 
//                 age, 
//                 gender, 
//                 department, 
//                 courses, 
//                 grades, 
//                 startyear, 
//                 classschedules, 
//                 announcements, 
//                 events, 
//                 message, 
//                 complain, 
//                 userrole 
//             }, // Update the fields
//             { new: true } // Return the updated document
//         );

//         if (!updatedUser) {
//             return NextResponse.json({
//                 message: "User not found."
//             }, { status: 404 });
//         }

//         return NextResponse.json({
//             message: "User updated successfully!",
//             user: updatedUser
//         }, { status: 200 });
//     } catch (error) {
//         console.error("Error updating user:", error);
//         return NextResponse.json({
//             message: "Error updating user."
//         }, { status: 500 });
//     }
// }
