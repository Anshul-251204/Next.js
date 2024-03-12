"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RequiestBodyOfTodo } from "@/types/apiType";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function () {
	const router = useRouter();
	const [todo, setTodo] = useState({
		title: "",
		description: "",
	});

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = e.target; // Destructure name and value from event target
		setTodo({
			...todo,
			[name]: value,
		});
	};

	const redirectToProfile = async () => {
		const res = await fetch("/api/todo/add", {
			method: "POST",
			body: JSON.stringify(todo),
			headers: { "Content-Type": "application/json" },
		});

		if (res.ok) {
			router.replace("/profile");
		}
	};
	return (
		<div className="w-full h-screen p-8 flex justify-center items-center">
			<div className="w-full h-[60%] sm:w-[60%]  rounded-lg p-4 flex flex-col gap-8">
				<Input
					value={todo?.title}
					onChange={handleChange}
					name="title"
					type="text"
					placeholder="Title"
				/>
				<Textarea
					name="description"
					value={todo.description}
					onChange={handleChange}
					placeholder="Description..."
					className="h-[200px]"
				/>
				<div className="w-full flex flex-row-reverse">
					<Button onClick={redirectToProfile}>
						Add <Plus />
					</Button>
				</div>
			</div>
		</div>
	);
}
