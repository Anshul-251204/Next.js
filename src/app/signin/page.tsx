"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const signInHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const signInData = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		if (signInData?.ok) {
			router.replace("/");
		}
	};

	const signInWithGithub = async () => {
		const res = await signIn("github", {
			callbackUrl: "http://localhost:3000/",
		});
	};
	return (
		<div className="w-full px-4 h-screen flex justify-center items-center">
			<div className="sm:w-[30%] sm:h-[70%] w-full h-full  border-foreground rounded-lg p-4">
				<form
					onSubmit={signInHandler}
					className="w-full h-[60%] py-52 sm:py-14"
				>
					<div className=" flex flex-col gap-4">
						<Label htmlFor={"email"}>Email</Label>
						<Input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id="email"
							placeholder="Email"
							type="email"
						/>
						<Label htmlFor={"password"}>Password</Label>
						<Input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="password"
							placeholder="password"
							type="text"
						/>
						<Link href={"/signup"}>
							click here for{" "}
							<span className="underline">Sign UP</span>
						</Link>

						<Button type="submit" size={"lg"} className="w-full ">
							{" "}
							<LogIn /> &nbsp; &nbsp; Login
						</Button>
					</div>
					<br />

					<p className="text-center  ">OR</p>

					<br />
				</form>
				<Button
					onClick={signInWithGithub}
					size={"lg"}
					className="w-full "
				>
					<Github /> &nbsp; &nbsp; Login with Github
				</Button>
				<br />
				
			</div>
		</div>
	);
}
