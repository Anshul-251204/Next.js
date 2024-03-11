"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Menu } from "lucide-react";
import DropDownMenu from "./DropDownMenu";

export default function Nav() {
	const { data, status } = useSession();

	return (
		<div className=" w-full px-10 py-4 flex justify-between items-center ">
			<div className="flex items-baseline">
				<h1 className="text-3xl font-bold mr-10 max-sm:mr-4 max-sm:text-lg">
					To-Blog
				</h1>

				<div className=" flex gap-4 max-sm:hidden">
					<a href="#feature">Feature</a>
					<Link href={"/blog"}>Blog</Link>
					<Link href={"/todo"}>Todo</Link>
				</div>
			</div>

			<div className="flex gap-4 items-center">
				{status == "unauthenticated" && (
					<Button
						className="max-sm:hidden"
						onClick={() => signIn()}
						size={"sm"}
					>
						Sign Up
					</Button>
				)}
				{status !== "unauthenticated" && (
					<Button
						onClick={() => signOut()}
						size={"sm"}
						variant={"outline"}
						className=" max-sm:hidden"
					>
						Logout
					</Button>
				)}
				<ModeToggle />
				<DropDownMenu />

				{data?.user?.image ? (
					<Link href={"/profile"}>
						<Avatar>
							<AvatarImage src={String(data?.user?.image)} />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</Link>
				) : null}
			</div>
		</div>
	);
}
