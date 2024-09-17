// import { NextResponse } from "next/server";

// export async function PUT(request, {params}){
//     const {id} = params;
//     const {newUser: email, password: password} = request.json(); 
//     await dbConnect();
//     await Students.findByIdAbdUpdate(id, {email, password});
//     return NextResponse.json({message: "User credentials just got updated!"}, {status: 200});
// }


// export async function GET(request, {params}){
//     const {id} = params;
//     await dbConnect();
//     const student = await Students.findById({_id: id});
//     return NextResponse.json({Students}, {status: 200});
// }



// /pages/api/users/[id].js
import { NextResponse } from "next/server";
import Students from "@/models/users";

export async function GET(request, { params }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ message: "User ID is required." }, { status: 400 });
    }

    try {
        const user = await Students.findById(id); // Fetch user by ID
        if (!user) {
            return NextResponse.json({ message: "User not found." }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 }); // Return the found user
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error retrieving user." }, { status: 500 });
    }
}
