"use client";
import Todo from "@/components/todo/Todo";
import { Button } from "@/components/ui/button";
import { TodoType } from "@/types/type";
import { CogIcon, Home, ListTodo, Plus, StickyNote } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
	const [todos, setTodos] = React.useState<TodoType[]>([]);

	const [refresh, setRefresh] = React.useState<boolean>();
	const router = useRouter();

	React.useEffect(() => {
		const fetchTodo = async () => {
			const res = await fetch("/api/todo", {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});

			const data = await res.json();

			setTodos(data.todos);
		};

		fetchTodo();
	}, [refresh]);

	const redirectToAddPage = () => {
		router.replace("/add-todo");
	};
	return (
		<div className="w-full h-screen flex">
			{/* //right */}
			<div className="hidden sm:flex flex-col gap-8 sm:w-[20vw] h-screen bg-background  pl-20 pt-36 font-sm text-xl border-r ">
				<Link
					className="flex items-center gap-2 py-2 w-[150px] hover:bg-secondary rounded-md px-4"
					href={"/"}
				>
					{" "}
					<Home />
					Home
				</Link>
				<Link
					className="flex items-center gap-2 p-2 w-[150px] hover:bg-secondary rounded-md px-4"
					href={"/profile"}
				>
					{" "}
					<ListTodo />
					Todo
				</Link>
				<Link
					className="flex items-center gap-2 p-2 w-[150px] hover:bg-secondary rounded-md px-4"
					href={"/"}
				>
					<StickyNote />
					Blog
				</Link>
				<Link
					className="flex items-center gap-2 p-2 w-[150px] hover:bg-secondary rounded-md px-4"
					href={"/setting"}
				>
					<CogIcon />
					Setting
				</Link>
			</div>
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
					{todos.map((todo, idx) => (
						<Todo
							setRefresh={setRefresh}
							key={idx}
							id={todo.id}
							title={todo.title}
							description={todo.description}
							isDone={todo.isDone}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
