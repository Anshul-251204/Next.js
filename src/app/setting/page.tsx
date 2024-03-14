"use client";

 import { CogIcon, Home, ListTodo, StickyNote } from "lucide-react";
import Link from "next/link";
 import React from "react";

export default function Page() {
	
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
						<h1 className="text-xl font-bold ">Setting</h1>
						<p className="text-sm">Manage your detials</p>
					</div>
				</div>

				<div className=" mt-8 w-full border rounded-lg ">
					{/* content */}
				</div>
			</div>
		</div>
	);
}
