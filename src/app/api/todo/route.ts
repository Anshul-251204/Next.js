import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
	
    const todos = await db.todo.findMany();
	return NextResponse.json(
		{ todos,message: "Todo was successfully Created" },
		{ status: 201 }
	);
}