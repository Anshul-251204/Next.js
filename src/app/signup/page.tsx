"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function page() {

	const signInHandler = async (e: React.FormEvent<HTMLFormElement>) => {

		e.preventDefault();

		
        
	};
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-[30%] h-[70%]   border-foreground rounded-lg p-4">
				<form 
                onSubmit={signInHandler}
                 className="w-full h-full py-14">
					<div className=" flex flex-col gap-4">
						<Label htmlFor={"Name"}>Name</Label>
						<Input id="Name" placeholder="Name" type="text" />
						<Label htmlFor={"email"}>Email</Label>
						<Input id="email" placeholder="Email" type="email" />
						<Label htmlFor={"password"}>Password</Label>
						<Input
							id="password"
							placeholder="password"
							type="text"
						/>

						<Button type="submit" size={"lg"} className="w-full ">
							{" "}
							<LogIn /> &nbsp; &nbsp; Sign up
						</Button>
					</div>
					<br />

					<p className="text-center  ">OR</p>

					<br />
					<div>
						<Link href={"/login"}>
							Already have a account{" "}
							<span className=" underline ">Click Here</span>
						</Link>
					</div>
					<br />
					<Button size={"lg"} className="w-full ">
						{" "}
						<Github /> &nbsp; &nbsp; Login with Github
					</Button>
				</form>
			</div>
		</div>
	);
}
