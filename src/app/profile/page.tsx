"use client"
import Todo from "@/components/todo/Todo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
	const router = useRouter();

	const redirectToAddPage = () => {
		router.replace("/add-todo");
	};
	return (
		<div className="w-full h-screen flex">
			{/* //right */}
			<div className="hidden sm:block sm:w-[20vw] h-screen bg-background "></div>
			{/* //left */}
			<div className="w-full sm:w-[80%] h-screen overflow-y-auto p-4">
				<div className="h-[100px] w-full border-b flex justify-between items-center p-4 ">
					<div className="">
						<h1 className="text-xl font-bold ">Todos</h1>
						<p className="text-sm">Manage your daily work</p>
					</div>

					<Button onClick={redirectToAddPage}>
						<Plus /> &nbsp;{" "}
						<span className="max-sm:hidden">New</span>
					</Button>
				</div>

				<div className=" mt-8 w-full border rounded-lg ">
					<Todo isDone={true} />
					<Todo />
					<Todo isDone={true} />
					<Todo />
				</div>
			</div>
		</div>
	);
}
