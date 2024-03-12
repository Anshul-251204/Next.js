import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
	const body = await req.json();

	const { isDonee, idd } = body;

	await db.todo.update({
		where: {
			id:idd,
		},
		data: {
			isDone: !isDonee,
		},
	});

	return NextResponse.json(
		{ message: "Update Successfully" },
		{ status: 200 }
	);
}
