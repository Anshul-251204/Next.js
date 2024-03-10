"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Nav() {
	const { data, status } = useSession();
	
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
				{status == "unauthenticated" && (
					<Button onClick={() => signIn()} size={"sm"}>
						Sign Up
					</Button>
				)}
				{status !== "unauthenticated" && (
					<Button
						onClick={() => signOut()}
						size={"sm"}
						variant={"outline"}
					>
						Logout
					</Button>
				)}
				{data?.user?.image ? (
					<Avatar>
						<AvatarImage src={String(data?.user?.image)} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				) : null}
				<ModeToggle />
			</div>
		</div>
	);
}
