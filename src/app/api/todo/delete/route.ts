import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
	const body = await req.json();

	await db.todo.delete({
		where:{
			id:body.id
		}
	})

	return NextResponse.json({message:"Todo was Delete Successfully "})
	
}