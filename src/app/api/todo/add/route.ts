import { db } from "@/lib/db";
import { RequiestBodyOfTodo } from "@/types/apiType";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req:NextRequest) {

    const body:RequiestBodyOfTodo = await req.json();

    const { title, description } = body;

    if(!title || ! description ) {
        return NextResponse.json({message:"Title and Description Both Requiest"}, {status:400});
    }

    const todo = await db.todo.create({
		data: {
			title,
			description,
		},
	});

    return NextResponse.json({todo, message:"Todo was successfully Created"}, {status:201})

}