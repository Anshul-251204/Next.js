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

export default function DropDownMenu() {

	const { status } = useSession();

  const loginOrLogoutHandler = async()=>{
    status !== "unauthenticated" ? signOut() : signIn()
  }

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Menu />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Todo</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Blog</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={loginOrLogoutHandler}>
					{status !== "unauthenticated" ? "Logout" : "Login"}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
