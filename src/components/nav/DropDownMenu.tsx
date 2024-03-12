import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function DropDownMenu() {
	const { status } = useSession();

	const loginOrLogoutHandler = async () => {
		status !== "unauthenticated" ? signOut() : signIn();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Menu />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<Link href={"/profile"}>Todo</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href={"/blog"}>Blog</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href={"/setting"}>Setting</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={loginOrLogoutHandler}>
					{status !== "unauthenticated" ? "Logout" : "Login"}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
