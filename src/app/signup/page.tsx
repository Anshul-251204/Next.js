"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {

	const router = useRouter();
	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target; // Destructure name and value from event target
		setCredentials({
			...credentials, // Spread the current state
			[name]: value, // Update the value of the specific field
		});
	};

	const signInHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const res = await fetch("http://localhost:3000/api/user", {
			method: "POST",
			body: JSON.stringify(credentials),
			headers: { "Content-Type": "application/json" },
		});

		if(res.ok){
			router.replace("/signin")
		}
	};

	const signInWithGithub = async () => {
		const res = await signIn("github", {
			callbackUrl: "http://localhost:3000/",
		});
	};

	return (
		<div className="w-full h-screen flex justify-center py-16 sm:py-4 items-center">
			<div className="sm:w-[30%] sm:h-[70%] w-full h-full  border-foreground rounded-lg p-4">
				<form
					onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
						signInHandler(e)
					}
					className="w-full h-full py-14"
				>
					<div className=" flex flex-col gap-4">
						<Label htmlFor={"Name"}>Name</Label>
						<Input
							name="name"
							value={credentials.name}
							onChange={handleChange}
							id="Name"
							placeholder="Name"
							type="text"
						/>
						<Label htmlFor={"email"}>Email</Label>
						<Input
							name="email"
							value={credentials.email}
							onChange={handleChange}
							id="email"
							placeholder="Email"
							type="email"
						/>
						<Label htmlFor={"password"}>Password</Label>
						<Input
							name="password"
							value={credentials.password}
							onChange={handleChange}
							id="password"
							placeholder="password"
							type="text"
						/>

						<Button type="submit" size={"lg"} className="w-full ">
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
					<Button
						onClick={signInWithGithub}
						type="button"
						size={"lg"}
						className="w-full "
					>
						<Github /> &nbsp; &nbsp; Login with Github
					</Button>
				</form>
			</div>
		</div>
	);
}
