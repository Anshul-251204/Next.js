import { db } from "@/lib/db";
import { RegisterRequestBody } from "@/types/apiType";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email, password }: RegisterRequestBody = body;

		if (!name || !email || !password) {

			return NextResponse.json(
				{
					message: "All fields are required",
				},
				{ status: 400 }
			);
		}

		const user = await db.user.findUnique({
			where: { email },
		});

		if (user) {
			
			return NextResponse.json(
				{
					message: "User All ready exists",
				},
				{ status: 409 }
			);
		}
		const hashPassword = bcrypt.hashSync(password, 10);

		const newUser = await db.user.create({
			data: {
				name,
				email,
				password: hashPassword,
			},
		});

		return NextResponse.json(
			{ newUser, message: "user sucessfull register" },
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);

		NextResponse.json(
			{ message: "Something Went wrong" },
			{
				status: 500,
			}
		);
	}
}

