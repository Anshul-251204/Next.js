"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { SquareCheckBig, X } from "lucide-react";
import { TodoType } from "@/types/type";

interface propstype extends TodoType {

	setRefresh: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export default function Todo({
	id,
	isDone,
	title,
	description,
	setRefresh,
}: propstype): any {
	const updateTodo = async (idd: number, isDonee: boolean) => {
		const res = await fetch("/api/todo/done", {
			method: "PUT",
			body: JSON.stringify({ idd, isDonee }),
			headers: { "Content-Type": "application/json" },
		});

		setRefresh((prev)=>(!prev));
	};

	const deleteTodo = async (idd: number) => {
		const res = await fetch("/api/todo/delete/", {
			body:JSON.stringify({id:idd}),
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});

		setRefresh((prev) => !prev);
	};

	return (
		<div
			className={`${
				isDone ? "bg-secondary" : null
			} w-full p-4 flex justify-between items-center border-b`}
		>
			<div className="w-[60%]">
				<h1>{title}</h1>
				<p className=" my-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full">
					{description}
				</p>
			</div>

			<div className="flex gap-4 items-center">
				<Button
					onClick={() =>deleteTodo(id)}
					variant={"secondary"}
				>
					<X />
				</Button>
				<Button
					onClick={() => updateTodo(id, isDone)}
					variant={"ghost"}
				>
					<SquareCheckBig
						className={
							isDone ? " text-green-500 " : " text-foreground"
						}
					/>
				</Button>
			</div>
		</div>
	);
}
