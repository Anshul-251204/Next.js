import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

export default function Nav() {
	return (
		<div className=" w-full px-10 py-4 flex justify-between items-center ">
			<div className="flex items-baseline">
				<h1 className="text-3xl font-bold mr-10">To-Blog-do</h1>
				<div className=" flex gap-4">
					<a href="#feature">Feature</a>
					<Link href={"/blog"}>Blog</Link>
					<Link href={"/todo"}>Todo</Link>
				</div>
			</div>

			<div className="flex gap-4 items-center">
				<Button size={"sm"}>Sign Up</Button>
				<Button 
                size={"sm"} 
                variant={"outline"}>
					Login
				</Button>
				<ModeToggle />
			</div>
		</div>
	);
}
